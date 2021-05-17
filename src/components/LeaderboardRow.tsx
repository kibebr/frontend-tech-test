import React from 'react'
import twin from 'twin.macro'
import { Prize } from '../domain/Prize'

interface LeaderboardRowProps {
  placedPrize: Prize & { place: number }
}

export const LeaderboardRow = ({ placedPrize }: LeaderboardRowProps): JSX.Element => {
  return (
    <div tw='flex flex-row font-bold text-lg'>
      <div>
        {placedPrize.place}
      </div>

      <div tw='mx-5' />

      <div>
        {placedPrize.title}
      </div>

      <div tw='ml-auto'>
        {placedPrize.total}
      </div>
    </div>
  )
}
