import { ArrowUp } from 'lucide-react'
import { closing } from '@/lib/content'
import { Sprig, Star } from './decor'
import { Reveal } from './reveal'

export function FinalPage() {
  return (
    <section id="last-page" aria-labelledby="closing-title" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-3xl">
        <div className="paper relative border border-soft-grey px-7 py-16 text-center shadow-[0_30px_60px_-40px_rgb(23_43_77/0.5)] sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute inset-3 border border-burgundy/15 sm:inset-4" aria-hidden="true" />

          <Sprig className="mx-auto size-14 text-burgundy" />
          <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-dusty">{closing.kicker}</p>
          <h2
            id="closing-title"
            className="mx-auto mt-6 max-w-xl font-serif text-4xl leading-[1.1] font-medium text-midnight text-balance sm:text-5xl"
          >
            {closing.heading}
          </h2>

          <div className="mx-auto my-10 flex max-w-[10rem] items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-soft-grey" />
            <Star className="size-3 text-cherry" />
            <span className="h-px flex-1 bg-soft-grey" />
          </div>

          <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-midnight/85 italic text-pretty sm:text-2xl">
            {closing.message}
          </p>
          <p className="mt-10 font-hand text-3xl text-burgundy">{closing.signature}</p>

          <a
            href="#top"
            className="mt-14 inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-midnight/70 transition-colors hover:text-burgundy"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to the first page
          </a>
        </div>
      </Reveal>
    </section>
  )
}
