'use client'

import { useState } from 'react'
import { hiddenNotes } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Star, WaxSeal } from './decor'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function Envelope({ label, message, index }: { label: string; message: string; index: number }) {
  const [open, setOpen] = useState(false)
  const flapColour = index % 2 === 0 ? 'bg-pale-blue' : 'bg-[#f3e6e8]'

  return (
    <div className="flex flex-col items-center">
      <div className="envelope relative mt-36 aspect-[3/2] w-full max-w-[320px]" data-open={open}>
        <div className="absolute inset-0 rounded-[3px] bg-[#efe9e1] shadow-[0_18px_30px_-20px_rgb(23_43_77/0.55)]" />

        <div
          aria-hidden={!open}
          className="env-letter ruled absolute inset-x-[6%] top-[6%] z-10 h-[90%] rounded-[2px] bg-white px-5 pt-4 shadow-sm"
        >
          <p className="font-hand text-[1.35rem] leading-8 text-midnight">{message}</p>
          <Star className="mt-1 size-3 text-cherry" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? `Fold away note: ${label}` : `Open note: ${label}`}
          className="absolute inset-0 z-20 cursor-pointer rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
        >
          <span className="env-front absolute inset-0 z-20 overflow-hidden rounded-[3px] bg-ivory">
            <span className="airmail absolute inset-x-0 bottom-0 h-1.5" />
          </span>
        </button>

        <span aria-hidden="true" className={cn('env-flap pointer-events-none absolute inset-x-0 top-0 h-full', flapColour)} />
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute top-[42%] left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300',
            open && 'opacity-0',
          )}
        >
          <WaxSeal className="size-12" />
        </span>
      </div>

      <p className="mt-6 text-center font-hand text-2xl text-midnight">{label}</p>
      <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-dusty">
        {open ? 'Tap to fold away' : 'Tap to open'}
      </p>
    </div>
  )
}

export function HiddenNotes() {
  return (
    <section id="notes" aria-labelledby="notes-title" className="paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="notes-title"
          number="05"
          kicker="Hidden Notes"
          align="center"
          title={
            <>
              A few things, <em className="font-normal text-burgundy">sealed for later.</em>
            </>
          }
        />
        <div className="mt-6 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {hiddenNotes.map((note, i) => (
            <Reveal key={note.label} delay={i * 120}>
              <Envelope label={note.label} message={note.message} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
