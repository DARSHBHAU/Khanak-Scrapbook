'use client'

import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { memoryCards } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Star } from './decor'
import { Modal } from './modal'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const cardStyles = [
  { card: 'bg-pale-blue text-midnight', label: 'text-burgundy', span: 'md:col-span-3', rotate: '-rotate-[0.6deg]' },
  { card: 'bg-burgundy text-white', label: 'text-pale-blue', span: 'md:col-span-3', rotate: 'rotate-[0.8deg]' },
  { card: 'bg-white text-midnight ring-1 ring-burgundy/20', label: 'text-cherry', span: 'md:col-span-2', rotate: 'rotate-[0.4deg]' },
  { card: 'bg-midnight text-white', label: 'text-pale-blue', span: 'md:col-span-2', rotate: '-rotate-[0.8deg]' },
  { card: 'paper text-midnight ring-1 ring-dusty/30', label: 'text-burgundy', span: 'md:col-span-2', rotate: 'rotate-[0.6deg]' },
]

export function MemoryCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const active = openIndex !== null ? memoryCards[openIndex] : null

  return (
    <section aria-labelledby="cards-title" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="cards-title"
          number="04"
          kicker="Little Memory Cards"
          title={
            <>
              Small pieces of a <em className="font-normal text-burgundy">larger story.</em>
            </>
          }
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-6 lg:gap-8">
          {memoryCards.map((card, i) => {
            const style = cardStyles[i % cardStyles.length]
            return (
              <li key={card.label} className={style.span}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-haspopup="dialog"
                    className={cn(
                      'group flex h-full min-h-64 w-full flex-col justify-between p-7 text-left shadow-[0_14px_30px_-22px_rgb(23_43_77/0.6)] transition-all duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_24px_40px_-24px_rgb(23_43_77/0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy sm:p-9',
                      style.card,
                      style.rotate,
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-serif text-sm italic opacity-70">No. {String(i + 1).padStart(2, '0')}</span>
                      <ArrowUpRight
                        className="size-5 opacity-50 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-10">
                      <p className={cn('font-hand text-2xl', style.label)}>{card.label}</p>
                      <h3 className="mt-2 font-serif text-3xl leading-tight font-medium text-balance">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed opacity-75">{card.preview}</p>
                    </div>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>

      <Modal open={active !== null} onClose={() => setOpenIndex(null)} labelledBy="card-dialog-title" className="max-w-xl">
        {active ? (
          <div className="paper">
            <div className="airmail h-1.5" aria-hidden="true" />
            <div className="p-8 sm:p-12">
              <p className="font-hand text-2xl text-cherry">{active.label}</p>
              <h2 id="card-dialog-title" className="mt-2 pr-8 font-serif text-4xl leading-tight font-medium text-midnight text-balance">
                {active.title}
              </h2>
              <div className="mt-8 space-y-5 font-serif text-xl leading-relaxed text-midnight/85">
                {active.body.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-3" aria-hidden="true">
                <Star className="size-3 text-cherry" />
                <span className="h-px flex-1 bg-soft-grey" />
                <span className="font-serif text-sm italic text-dusty">Khanak.</span>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
