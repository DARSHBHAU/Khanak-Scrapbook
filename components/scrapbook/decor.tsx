import { Paperclip } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PhotoDecoration } from '@/lib/content'

export function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('size-4', className)} style={style} fill="currentColor">
      <path d="M12 0C12.6 6.6 17.4 11.4 24 12 17.4 12.6 12.6 17.4 12 24 11.4 17.4 6.6 12.6 0 12 6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  )
}

export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn('size-12', className)} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M32 60V18" />
      <path d="M32 46c-6-1-11-5-12-11 6 0 11 4 12 11Z" />
      <path d="M32 46c6-1 11-5 12-11-6 0-11 4-12 11Z" />
      <path d="M32 32c-5-1-9-4-10-9 5 0 9 3 10 9Z" />
      <path d="M32 32c5-1 9-4 10-9-5 0-9 3-10 9Z" />
      <circle cx="32" cy="12" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WaxSeal({ letter = 'K', className }: { letter?: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'grid size-20 place-items-center rounded-full bg-burgundy text-white shadow-[0_6px_14px_-4px_rgb(122_31_53/0.55),inset_0_-4px_8px_rgb(0_0_0/0.25),inset_0_3px_6px_rgb(255_255_255/0.18)]',
        className,
      )}
    >
      <div className="grid size-[78%] place-items-center rounded-full border border-white/30">
        <span className="font-serif text-3xl italic leading-none">{letter}</span>
      </div>
    </div>
  )
}

export function PhotoDecor({ type }: { type?: PhotoDecoration }) {
  switch (type) {
    case 'tape-blue':
      return (
        <span
          aria-hidden="true"
          className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-3 bg-pale-blue/90 shadow-sm ring-1 ring-dusty/20"
        />
      )
    case 'tape-red':
      return (
        <span
          aria-hidden="true"
          className="absolute -top-3 -right-4 z-10 h-7 w-20 rotate-[28deg] bg-cherry/25 shadow-sm backdrop-blur-[1px]"
        />
      )
    case 'pin':
      return (
        <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 -translate-x-1/2">
          <span className="block size-4 rounded-full bg-cherry shadow-[0_3px_5px_rgb(23_43_77/0.35),inset_-2px_-2px_3px_rgb(0_0_0/0.25)]" />
        </span>
      )
    case 'clip':
      return (
        <Paperclip
          aria-hidden="true"
          strokeWidth={1.5}
          className="absolute -top-5 left-6 z-10 size-10 -rotate-12 text-dusty drop-shadow-sm"
        />
      )
    default:
      return null
  }
}
