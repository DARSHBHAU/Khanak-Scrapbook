const links = [
  { href: '#scrapbook', label: 'The Book' },
  { href: '#memories', label: 'Memories' },
  { href: '#notes', label: 'Little Notes' },
  { href: '#last-page', label: 'Last Page' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-soft-grey/70 bg-white/85 backdrop-blur-md">
      <div className="airmail h-1" aria-hidden="true" />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-serif text-2xl font-medium tracking-tight text-midnight">
          Khanak<span className="text-cherry">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-midnight/70 transition-colors hover:text-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#scrapbook"
          className="inline-flex min-h-10 items-center rounded-full border border-midnight/15 px-4 text-xs font-medium uppercase tracking-[0.18em] text-midnight transition-colors hover:border-burgundy hover:text-burgundy md:hidden"
        >
          Open
        </a>
      </nav>
    </header>
  )
}
