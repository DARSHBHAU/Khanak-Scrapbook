'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { bookPages, photos } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Star } from './decor'
import { Polaroid } from './polaroid'
import { SectionHeading } from './section-heading'

const total = bookPages.length
const pad = (n: number) => String(n).padStart(2, '0')

export function ScrapbookBook() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const touchStart = useRef<number | null>(null)

  const page = bookPages[index]
  const photo = photos.find((p) => p.id === page.photoId) ?? photos[0]
  const isLast = index === total - 1

  function goTo(target: number) {
    if (target < 0 || target >= total || target === index) return
    setDirection(target > index ? 'next' : 'prev')
    setIndex(target)
  }

  return (
    <section id="scrapbook" aria-labelledby="book-title" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="book-title"
            number="01"
            kicker="The Scrapbook"
            title={
              <>
                Turn the pages, <em className="font-normal text-burgundy">slowly.</em>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-midnight/65">
            Use the arrows, swipe, or your keyboard to move through the book.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="book"
          aria-label="Scrapbook pages"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') goTo(index + 1)
            if (e.key === 'ArrowLeft') goTo(index - 1)
          }}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return
            const delta = e.changedTouches[0].clientX - touchStart.current
            if (Math.abs(delta) > 50) goTo(delta < 0 ? index + 1 : index - 1)
            touchStart.current = null
          }}
          className="mt-14 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-dusty"
        >
          <div className="relative rounded-sm bg-midnight p-2 shadow-[0_40px_80px_-40px_rgb(23_43_77/0.6)] sm:p-3">
            <div
              key={index}
              aria-live="polite"
              className={cn(
                'grid overflow-hidden rounded-[2px] lg:grid-cols-2',
                direction === 'next' ? 'turn-next' : 'turn-prev',
              )}
            >
              <div className="paper relative flex items-center justify-center px-8 py-14 sm:px-16 lg:min-h-[600px] lg:border-r lg:border-soft-grey">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l from-midnight/10 to-transparent lg:block"
                />
                <div className="w-full max-w-sm">
                  <Polaroid photo={photo} sizes="(min-width: 1024px) 400px, 80vw" />
                </div>
                <Star className="absolute top-8 left-8 size-3 text-cherry" />
              </div>

              <div className="paper relative flex flex-col justify-between px-8 py-12 sm:px-14 lg:min-h-[600px] lg:py-16">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r from-midnight/10 to-transparent lg:block"
                />
                <div className="relative">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-dusty">{page.kicker}</p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight font-medium text-midnight text-balance sm:text-5xl">
                    {page.title}
                  </h3>
                  <p className="ruled mt-8 font-serif text-xl leading-8 text-midnight/85 text-pretty">{page.body}</p>
                </div>

                <div className="relative mt-12 flex items-end justify-between gap-6">
                  <p className="max-w-[16rem] -rotate-2 border-l-2 border-cherry/60 bg-pale-blue/70 px-4 py-3 font-hand text-2xl leading-snug text-burgundy">
                    {page.note}
                  </p>
                  <p className="font-serif text-lg italic text-dusty">
                    <span className="sr-only">Page </span>
                    {pad(index + 1)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex w-full items-center gap-4 sm:w-auto">
              <p className="shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-midnight/70">
                Page <span className="text-burgundy">{pad(index + 1)}</span> / {pad(total)}
              </p>
              <div
                className="h-px w-full bg-soft-grey sm:w-48"
                role="progressbar"
                aria-label="Reading progress"
                aria-valuemin={1}
                aria-valuemax={total}
                aria-valuenow={index + 1}
              >
                <div
                  className="h-px bg-burgundy transition-[width] duration-700 ease-out"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="mr-2 hidden items-center gap-1 sm:flex">
                {bookPages.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to page ${i + 1}: ${p.title}`}
                    aria-current={i === index ? 'page' : undefined}
                    className="grid size-8 place-items-center"
                  >
                    <span
                      className={cn(
                        'block size-1.5 rounded-full transition-all duration-500',
                        i === index ? 'w-5 bg-burgundy' : 'bg-dusty/50 hover:bg-dusty',
                      )}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                aria-label="Previous page"
                className="grid size-12 place-items-center rounded-full border border-midnight/15 text-midnight transition-all duration-300 hover:border-burgundy hover:text-burgundy disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              {isLast ? (
                <a
                  href="#memories"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-midnight px-6 text-sm font-medium text-white transition-colors hover:bg-burgundy"
                >
                  To the gallery
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next page"
                  className="grid size-12 place-items-center rounded-full bg-midnight text-white transition-colors duration-300 hover:bg-burgundy"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
