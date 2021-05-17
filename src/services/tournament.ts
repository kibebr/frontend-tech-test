/* eslint-disable @typescript-eslint/promise-function-async */

import { chain, map, chainEitherKW, tryCatch, TaskEither } from 'fp-ts/TaskEither'
import { toError } from 'fp-ts/Either'
import { flow, constant } from 'fp-ts/function'
import { safeJson } from '../utils/safeJson'
import { Tournament } from '../domain/Tournament'
import { Errors as APIError } from 'io-ts'
import * as t from 'io-ts'

const PrizeV = t.type({
  title: t.string,
  total: t.string
})

const GameV = t.type({
  title: t.string,
  src: t.string
})

const TournamentV = t.type({
  title: t.string,
  description: t.string,
  endDate: t.string,
  startDate: t.string,
  prizePool: t.string,
  backgroundImage: t.string,
  players: t.number,
  prizeList: t.array(PrizeV),
  games: t.array(GameV),
  terms: t.array(t.string)
})

const getTournament = (): TaskEither<Error, Response> => tryCatch(
  constant(fetch('https://run.mocky.io/v3/5ab803b0-5f91-4855-9d2c-ef5c44d69bff')),
  toError
)

// this function simply converts/parses the API tournament to the domain Tournament (not a lot of difference between the two, however)
const parse = (tournament: t.TypeOf<typeof TournamentV>): Tournament => ({
  ...tournament,
  startDate: new Date(tournament.startDate),
  endDate: new Date(tournament.endDate)
})

export const fetchTournament: () => TaskEither<APIError | Error, Tournament> = flow(
  getTournament,
  chain(safeJson),
  chainEitherKW(TournamentV.decode),
  map(parse)
)
