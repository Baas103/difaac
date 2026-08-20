'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/link-button'
import { LogoMark } from '@/components/logo-mark'
import { MobileNav } from '@/components/mobile-nav'
import { SearchOverlay } from '@/components/search-overlay'
import {
  ProductsMegaMenu,
  IndustriesMegaMenu,
  SolutionsMegaMenu,
  ServicesMegaMenu,
  CompanyDropdown,
} from '@/components/mega-menu'

const navItems = [
  { key: 'products', label: 'Products' },
  { key: 'industries', label: 'Industries' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'services', label: 'Services' },
  { key: 'company', label: 'Company' },
] as const

type NavKey = (typeof navItems)[number]['key']

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<NavKey | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function openNav(key: NavKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(key)
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line-soft backdrop-blur-xl transition-shadow ${
        scrolled ? 'bg-ink/92 shadow-sm' : 'bg-ink/75'
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-12">
        <LogoMark />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.key} className="relative" onMouseEnter={() => openNav(item.key)}>
              <button
                type="button"
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  openMenu === item.key ? 'text-text' : 'text-body hover:text-text'
                }`}
                aria-expanded={openMenu === item.key}
              >
                {item.label}
                <span
                  className={`absolute -bottom-px left-0 h-[2px] w-full bg-brand transition-transform duration-200 ${
                    openMenu === item.key ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
              {item.key === 'products' ? <ProductsMegaMenu isOpen={openMenu === 'products'} /> : null}
              {item.key === 'industries' ? <IndustriesMegaMenu isOpen={openMenu === 'industries'} /> : null}
              {item.key === 'solutions' ? <SolutionsMegaMenu isOpen={openMenu === 'solutions'} /> : null}
              {item.key === 'services' ? <ServicesMegaMenu isOpen={openMenu === 'services'} /> : null}
              {item.key === 'company' ? <CompanyDropdown isOpen={openMenu === 'company'} /> : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" aria-hidden="true" />
          </Button>
          <LinkButton href="/talk-to-sales" size="sm" className="hidden md:inline-flex">
            Talk to sales
          </LinkButton>
          <Link
            href="/sign-in"
            className="hidden text-sm font-medium text-body transition-colors hover:text-text lg:inline-block"
          >
            Sign in
          </Link>
          <MobileNav />
        </div>
      </div>
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
