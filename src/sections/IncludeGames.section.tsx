import React from 'react'
import tw from 'twin.macro'
import { SectionTitle } from '../components/SectionTitle'
import { Game } from '../domain/Game'

interface IncludeGamesSectionProps {
  games: Game[]
}

export const IncludeGamesSection = ({ games }: IncludeGamesSectionProps): JSX.Element => {
  return (
    <section tw='p-5 md:p-10'>
      <SectionTitle>Included Games</SectionTitle>

      <div tw='my-2' />

      <div tw='grid grid-flow-col grid-cols-2 grid-rows-3 md:(grid-cols-3 grid-rows-2) gap-3'>
        {games.map(({ title, src }) => (
          <img
            key={src}
            src={src}
            alt={title}
          />
        ))}
      </div>
    </section>
  )
}
