import { FeaturedMemory } from '@/components/scrapbook/featured-memory'
import { FinalPage } from '@/components/scrapbook/final-page'
import { Hero } from '@/components/scrapbook/hero'
import { HiddenNotes } from '@/components/scrapbook/hidden-notes'
import { MemoryCards } from '@/components/scrapbook/memory-cards'
import { MemoryGallery } from '@/components/scrapbook/memory-gallery'
import { ScrapbookBook } from '@/components/scrapbook/scrapbook-book'
import { SiteHeader } from '@/components/scrapbook/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ScrapbookBook />
        <MemoryGallery />
        <FeaturedMemory />
        <MemoryCards />
        <HiddenNotes />
        <FinalPage />
      </main>
      <footer className="bg-midnight text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="font-serif text-xl">
            Khanak<span className="text-cherry">.</span>
          </p>
          <p className="font-hand text-xl text-pale-blue">made by hand, kept with care</p>
        </div>
        <div className="airmail h-1" aria-hidden="true" />
      </footer>
    </>
  )
}
