import { ArrowRight } from 'lucide-react'
import { photos, site } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Star, WaxSeal } from './decor'
import { Polaroid } from './polaroid'

const byId = (id: string) => photos.find((p) => p.id === id) ?? photos[0]

const collage = [
  { id: 'sea', className: 'left-0 top-[30%] z-10 w-[40%]', rotate: -8, delay: 350 },
  { id: 'street', className: 'right-0 top-[3%] z-10 w-[40%]', rotate: 7, delay: 500 },
  { id: 'roses', className: 'left-[23%] top-[9%] z-20 w-[54%]', rotate: -2.5, delay: 150, main: true },
  { id: 'coffee', className: 'right-[1%] bottom-[2%] z-30 w-[47%]', rotate: 4, delay: 700 },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="relative z-10">
          <p
            className="fade-up flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-dusty"
            style={{ '--delay': '0ms' } as React.CSSProperties}
          >
            <Star className="size-3 text-cherry" />
            {site.volume}
          </p>
          <h1
            id="hero-title"
            className="fade-up mt-6 font-serif text-[3.4rem] leading-[0.95] font-medium tracking-tight text-midnight text-balance sm:text-7xl lg:text-[5.6rem]"
            style={{ '--delay': '120ms' } as React.CSSProperties}
          >
            {site.title} <em className="font-normal text-burgundy">{site.titleAccent}</em>
          </h1>
          <p
            className="fade-up mt-7 max-w-md text-lg leading-relaxed text-midnight/75 text-pretty"
            style={{ '--delay': '260ms' } as React.CSSProperties}
          >
            {site.subtitle}
          </p>
          <div
            className="fade-up mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
            style={{ '--delay': '400ms' } as React.CSSProperties}
          >
            <a
              href="#scrapbook"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-burgundy px-7 text-sm font-medium tracking-wide text-white shadow-[0_10px_24px_-12px_rgb(122_31_53/0.8)] transition-all duration-500 hover:bg-midnight hover:shadow-[0_14px_28px_-14px_rgb(23_43_77/0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
            >
              Open the Scrapbook
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#memories"
              className="text-sm font-medium text-midnight underline decoration-dusty/60 decoration-1 underline-offset-[6px] transition-colors hover:text-cherry hover:decoration-cherry"
            >
              Explore the Memories
            </a>
          </div>
          <p
            className="fade-up mt-14 hidden max-w-xs font-hand text-2xl leading-snug text-dusty lg:block"
            style={{ '--delay': '900ms' } as React.CSSProperties}
          >
            {'a few pages, put together by hand — turn slowly.'}
          </p>
        </div>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-[560px]">
          {collage.map((item) => (
            <div
              key={item.id}
              className={cn('fade-up absolute', item.className)}
              style={{ '--delay': `${item.delay}ms` } as React.CSSProperties}
            >
              <Polaroid
                photo={byId(item.id)}
                rotate={item.rotate}
                priority={item.main}
                showDate={false}
                decoration={item.main ? 'tape-blue' : 'none'}
                sizes="(min-width: 1024px) 300px, 50vw"
                className="p-2 pb-3 sm:p-3 sm:pb-4"
                captionClassName="text-base sm:text-xl"
              />
              {item.main ? (
                <WaxSeal className="absolute -left-4 bottom-20 z-30 size-12 rotate-[-10deg] sm:-left-7 sm:size-20" />
              ) : null}
            </div>
          ))}

          <p
            aria-hidden="true"
            className="fade-up absolute -top-2 left-[2%] z-30 -rotate-6 font-hand text-xl text-burgundy sm:text-2xl"
            style={{ '--delay': '1100ms' } as React.CSSProperties}
          >
            kept, for Khanak
          </p>

          <Star className="drift absolute top-[22%] left-[6%] size-4 text-cherry" style={{ '--delay': '0ms' } as React.CSSProperties} />
          <Star className="drift absolute top-[60%] right-[3%] size-3 text-dusty" style={{ '--delay': '1.5s' } as React.CSSProperties} />
          <Star className="drift absolute bottom-[8%] left-[18%] size-5 text-midnight/80" style={{ '--delay': '3s' } as React.CSSProperties} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8" aria-hidden="true">
        <div className="flex items-center gap-4 text-dusty">
          <span className="h-px flex-1 bg-soft-grey" />
          <Star className="size-3 text-cherry" />
          <span className="h-px flex-1 bg-soft-grey" />
        </div>
      </div>
    </section>
  )
}
