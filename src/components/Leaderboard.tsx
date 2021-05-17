import React from 'react'
import tw from 'twin.macro'
import { LeaderboardRow } from './LeaderboardRow'
import { Prize } from '../domain/Prize'
import { generateId } from '../utils/Id'

interface LeaderboardProps {
  prizes: Prize[]
}

export const Leaderboard = ({ prizes }: LeaderboardProps): JSX.Element => {
  return (
    <div tw='h-40 overflow-y-auto'>
      {prizes.map((prize, i) => (
        <LeaderboardRow
          key={generateId()}
          placedPrize={{ ...prize, ...{ place: i + 1 } }}
        />
      ))}
    </div>
  )
}
