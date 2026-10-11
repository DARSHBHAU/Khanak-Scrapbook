'use client'

import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type ModalProps = {
  open: boolean
  onClose: () => void
  labelledBy: string
  children: React.ReactNode
  className?: string
}

export function Modal({ open, onClose, labelledBy, children, className }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
      className={cn('modal w-full overflow-y-auto bg-white p-0 text-midnight shadow-2xl', className)}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-3 right-3 z-20 grid size-10 place-items-center rounded-full bg-white/90 text-midnight ring-1 ring-soft-grey transition-colors hover:bg-pale-blue hover:text-burgundy focus-visible:outline-2 focus-visible:outline-burgundy"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
      {children}
    </dialog>
  )
}
