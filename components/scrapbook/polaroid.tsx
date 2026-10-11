import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Photo, PhotoDecoration } from '@/lib/content'
import { PhotoDecor } from './decor'

const shapeClass = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
} as const

type PolaroidProps = {
  photo: Photo
  onOpen?: (photo: Photo) => void
  className?: string
  sizes?: string
  priority?: boolean
  showDate?: boolean
  decoration?: PhotoDecoration
  rotate?: number
  captionClassName?: string
}

export function Polaroid({
  photo,
  onOpen,
  className,
  sizes = '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw',
  priority,
  showDate = true,
  decoration,
  rotate,
  captionClassName,
}: PolaroidProps) {
  const frame = (
    <>
      <PhotoDecor type={decoration ?? photo.decoration} />
      <div className={cn('relative overflow-hidden bg-pale-blue', shapeClass[photo.shape])}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`polaroid-img object-cover`}
          style={{ objectPosition: photo.objectPosition ?? 'center' }}
        />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 px-1 pt-3">
        <span className={cn('font-hand text-xl leading-tight text-midnight sm:text-2xl', captionClassName)}>
          {photo.caption}
        </span>
        {showDate && photo.date ? (
          <span className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-dusty">{photo.date}</span>
        ) : null}
      </figcaption>
    </>
  )

  const style = { '--r': `${rotate ?? photo.rotate ?? 0}deg` } as React.CSSProperties
  const base = cn('polaroid relative block bg-white p-3 pb-4 sm:p-4 sm:pb-5', className)

  if (onOpen) {
    return (
      <figure className="m-0">
        <button
          type="button"
          onClick={() => onOpen(photo)}
          style={style}
          aria-label={`Open photograph: ${photo.caption}`}
          className={cn(
            base,
            'polaroid-interactive w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy',
          )}
        >
          {frame}
        </button>
      </figure>
    )
  }

  return (
    <figure style={style} className={base}>
      {frame}
    </figure>
  )
}
