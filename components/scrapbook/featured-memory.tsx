'use client'

import { useState } from 'react'
import { featuredMemory, photos, type Photo } from '@/lib/content'
import { Star } from './decor'
import { PhotoLightbox } from './photo-lightbox'
import { Polaroid } from './polaroid'
import { Reveal } from './reveal'

export function FeaturedMemory() {
  const [active, setActive] = useState<Photo | null>(null)
  const photo = photos.find((p) => p.id === featuredMemory.photoId) ?? photos[0]

  return (
    <section aria-labelledby="featured-title" className="relative overflow-hidden bg-midnight py-24 text-white sm:py-32">
      <div className="airmail absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <Polaroid
            photo={photo}
            onOpen={setActive}
            rotate={-3}
            decoration="tape-red"
            sizes="(min-width: 1024px) 480px, 90vw"
          />
          <p
            aria-hidden="true"
            className="absolute -bottom-10 right-0 rotate-[-4deg] font-hand text-2xl text-pale-blue sm:-right-6"
          >
            {featuredMemory.note}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-pale-blue/80">
            <span className="text-white">03</span>
            <span aria-hidden="true" className="h-px w-8 bg-white/30" />
            {featuredMemory.kicker}
          </p>
          <span aria-hidden="true" className="mt-8 block font-serif text-8xl leading-[0.5] text-cherry">
            {'“'}
          </span>
          <h2 id="featured-title" className="mt-2 font-serif text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
            {featuredMemory.heading}
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/75 text-pretty">{featuredMemory.body}</p>
          <div className="mt-10 flex items-center gap-3 text-dusty" aria-hidden="true">
            <Star className="size-3 text-cherry" />
            <span className="h-px w-16 bg-white/20" />
            <Star className="size-2 text-white/60" />
          </div>
        </Reveal>
      </div>

      <PhotoLightbox photo={active} onClose={() => setActive(null)} />
    </section>
  )
}
