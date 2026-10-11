import { cn } from '@/lib/utils'
import { Star } from './decor'

type SectionHeadingProps = {
  id?: string
  number: string
  kicker: string
  title: React.ReactNode
  note?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeading({ id, number, kicker, title, note, align = 'left', tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em]',
          align === 'center' && 'justify-center',
          dark ? 'text-pale-blue/80' : 'text-dusty',
        )}
      >
        <span className={dark ? 'text-white' : 'text-burgundy'}>{number}</span>
        <span aria-hidden="true" className={cn('h-px w-8', dark ? 'bg-white/30' : 'bg-soft-grey')} />
        {kicker}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-5 font-serif text-4xl leading-[1.05] font-medium text-balance sm:text-5xl lg:text-6xl',
          dark ? 'text-white' : 'text-midnight',
        )}
      >
        {title}
      </h2>
      {note ? (
        <p
          className={cn(
            'mt-4 inline-flex items-center gap-2 font-hand text-2xl',
            dark ? 'text-pale-blue' : 'text-cherry',
          )}
        >
          <Star className="size-3" />
          {note}
        </p>
      ) : null}
    </div>
  )
}
