import React, { MouseEventHandler } from 'react'
import tw from 'twin.macro'
import { Prize } from '../domain/Prize'
import { Separator } from '../components/Separator'
import { SectionTitle } from '../components/SectionTitle'
import { Leaderboard } from '../components/Leaderboard'
import { ReactComponent as RefreshIcon } from '../images/refresh.svg'

interface PrizeListSectionProps {
  handleRefresh: MouseEventHandler<HTMLButtonElement>
  prizes: Prize[]
  description: string
}

export const PrizeListSection = ({ handleRefresh, prizes, description }: PrizeListSectionProps): JSX.Element => {
  return (
    <section tw='p-5 md:p-10'>
      <div tw='flex flex-row items-center'>
        <SectionTitle>Prize List</SectionTitle>
          <button tw='ml-auto' onClick={handleRefresh}>
            <RefreshIcon />
          </button>
      </div>

      <Separator tw='my-4' />

      <Leaderboard prizes={prizes} />

      <Separator tw='my-4' />

      <p tw='text-lg font-roboto'>
        {description}
      </p>
    </section>
  )
}
