'use client'

import Image from 'next/image'
import type { Photo } from '@/lib/content'
import { Star } from './decor'
import { Modal } from './modal'

export function PhotoLightbox({ photo, onClose }: { photo: Photo | null; onClose: () => void }) {
  return (
    <Modal open={photo !== null} onClose={onClose} labelledBy="lightbox-caption" className="max-w-5xl">
      {photo ? (
        <div className="grid md:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[4/5] bg-pale-blue md:aspect-auto md:min-h-[70vh]">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
          </div>
          <div className="paper flex flex-col justify-between gap-10 p-8 sm:p-10">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-dusty">{photo.date ?? 'A memory'}</p>
              <h2 id="lightbox-caption" className="mt-4 font-hand text-4xl leading-tight text-burgundy text-pretty">
                {photo.caption}
              </h2>
              {photo.story ? (
                <p className="mt-6 font-serif text-xl leading-relaxed text-midnight text-pretty">{photo.story}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-2 text-cherry" aria-hidden="true">
              <Star className="size-3" />
              <span className="h-px flex-1 bg-soft-grey" />
              <span className="font-serif text-sm italic text-dusty">Khanak.</span>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
