import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { ReactComponent as CloseIcon } from '../images/close.svg'
import { ReactComponent as CalendarIcon } from '../images/calendar.svg'
import { ReactComponent as PeopleIcon } from '../images/user.svg'

interface CountdownProps {
  startDate: Date
  endDate: Date
}

interface HeadlineProps {
  title: string
  backgroundUrl: string
  startDate: Date
  endDate: Date
}

const Countdown = ({ startDate, endDate }: CountdownProps): JSX.Element => {
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [days, setDays] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = endDate.getTime() - startDate.getTime()

      const seconds = Math.floor(difference / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      setHours(hours % 24)
      setMinutes(minutes % 60)
      setDays(days)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {days} d {hours} h {minutes} m
    </div>
  )
}

export const Headline = ({ title, backgroundUrl, startDate, endDate }: HeadlineProps): JSX.Element => {
  return (
    <section
      tw='flex flex-col p-5 md:p-10 text-white h-96 font-bold bg-cover bg-center'
      css={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div tw='flex flex-row'>
        <h1 tw='text-3xl'>{title}</h1>
        <button tw='ml-auto'>
          <CloseIcon />
        </button>
      </div>

      <div tw='my-2' />

      <div tw='text-2xl flex flex-row space-x-4'>
        <div>Starts at</div>
        <Countdown
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <div tw='mt-auto'>
        <div tw='flex flex-row space-x-8'>
          <div tw='flex flex-col'>
            <h2 tw='text-blue-brand'>PRIZE POOL</h2>
            <span tw='text-2xl'>$25,000.00</span>
          </div>
          <div>
            <h2 tw='text-blue-brand'>PLAYERS</h2>
            <span tw='flex flex-row items-center space-x-1.5 text-2xl'>
              <PeopleIcon />
              <div>359</div>
            </span>
          </div>
        </div>

        <div tw='my-5' />

        <div tw='flex flex-row space-x-4'>
          <CalendarIcon />
          <div>
            Starts on Thu, 20 Feb 2020, 23:00:00 GMT
          </div>
        </div>

        <div tw='my-5' />

        <button tw='p-2 bg-yellow-brand w-full md:w-96 font-bold tracking-widest text-black'>
          JOIN
        </button>
      </div>
    </section>

  )
}
