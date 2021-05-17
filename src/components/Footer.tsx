import React from 'react'
import tw from 'twin.macro'
import { ReactComponent as FacebookIcon } from '../images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../images/twitter.svg'

export const Footer = (): JSX.Element => {
  return (
    <footer tw='flex p-12 bg-purple-700 items-center justify-center'>
      <div tw='flex flex-col'>
        <h2 tw='font-bold text-yellow-300 text-lg'>Share this Tournament</h2>

        <div tw='my-2' />

        <div tw='flex flex-row justify-center space-x-2'>
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </footer>
  )
}
