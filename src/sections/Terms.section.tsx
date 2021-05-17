import React from 'react'
import tw from 'twin.macro'
import { SectionTitle } from '../components/SectionTitle'

interface TermsSectionProps {
  terms: string[]
}

export const TermsSection = ({ terms }: TermsSectionProps): JSX.Element => {
  return (
    <section tw='p-5 md:p-10'>
      <SectionTitle>Terms & Conditions</SectionTitle>

      <div tw='my-2' />

      <ul tw='list-disc pl-5 text-lg font-roboto'>
        {terms.map((term, i) => (
          <li key={i}>
            {term}
          </li>
        ))}
      </ul>
    </section>
  )
}
