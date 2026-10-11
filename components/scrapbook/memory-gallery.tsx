'use client'

import { Fragment, useState } from 'react'
import { galleryNotes, photos, type Photo } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Star } from './decor'
import { PhotoLightbox } from './photo-lightbox'
import { Polaroid } from './polaroid'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function MemoryGallery() {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <section id="memories" aria-labelledby="gallery-title" className="paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="gallery-title"
          number="02"
          kicker="The Memory Gallery"
          title={
            <>
              Photographs, <em className="font-normal text-burgundy">pinned with care.</em>
            </>
          }
          note="tap any photograph to look closer"
        />

        <div className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3 lg:gap-12">
          {photos.map((photo, i) => {
            const note = galleryNotes.find((n) => n.afterIndex === i)
            return (
              <Fragment key={photo.id}>
                <Reveal delay={(i % 3) * 120} className="mb-12 break-inside-avoid px-2 pt-4">
                  <Polaroid photo={photo} onOpen={setActive} />
                </Reveal>
                {note ? (
                  <Reveal className="mb-12 break-inside-avoid px-4 pt-2">
                    <aside
                      className={cn(
                        'relative rotate-1 p-6 pt-8 shadow-[0_8px_20px_-14px_rgb(23_43_77/0.45)]',
                        note.tone === 'blue' ? 'bg-pale-blue' : 'bg-white ring-1 ring-burgundy/15',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-2 left-1/2 block size-4 -translate-x-1/2 rounded-full bg-burgundy shadow-[0_3px_5px_rgb(23_43_77/0.35)]"
                      />
                      <p className="font-hand text-2xl leading-snug text-midnight">{note.text}</p>
                      <Star className={cn('mt-4 size-3', note.tone === 'blue' ? 'text-cherry' : 'text-dusty')} />
                    </aside>
                  </Reveal>
                ) : null}
              </Fragment>
            )
          })}
        </div>
      </div>

      <PhotoLightbox photo={active} onClose={() => setActive(null)} />
    </section>
  )
}
