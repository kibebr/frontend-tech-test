/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */

import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { Headline } from './sections/Headline.section'
import { PrizeListSection } from './sections/PrizeList.section'
import { IncludeGamesSection } from './sections/IncludeGames.section'
import { TermsSection } from './sections/Terms.section'
import { Footer } from './components/Footer'
import { Tournament } from './domain/Tournament'
import { fetchTournament } from './services/tournament'
import { fold } from 'fp-ts/Either'
import { Errors as APIError } from 'io-ts'

export default function App (): JSX.Element {
  const [tournament, setTournament] = useState<null | Tournament>(null)

  const handleError = (err: APIError | Error): void => {
    console.error(err)
  }

  const refresh = (): void => {
    fetchTournament()()
      .then(fold(
        handleError,
        setTournament
      ))
  }

  useEffect(refresh)

  if (tournament === null) {
    return (
      <div>
        Loading...
      </div>
    )
  } else {
    return (
      <div tw='max-w-screen-lg m-auto'>
        <Headline
          title={tournament.title}
          backgroundUrl={tournament.backgroundImage}
          startDate={tournament.startDate}
          endDate={tournament.endDate}
        />

        <div tw='my-5' />

        <PrizeListSection
          handleRefresh={refresh}
          prizes={tournament.prizeList}
          description={tournament.description}
        />

        <IncludeGamesSection games={tournament.games} />

        <TermsSection terms={tournament.terms} />

        <Footer />
      </div>
    )
  }
}
