import Link from 'next/link'
import { LogoMark } from '@/components/logo-mark'
import { Link2, AtSign, Rss } from 'lucide-react'

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Threat Intelligence', href: '/products/threat-intelligence' },
      { label: 'Digital Risk Protection', href: '/products/digital-risk-protection' },
      { label: 'Managed XDR', href: '/products/managed-xdr' },
      { label: 'Fraud Protection', href: '/products/fraud-protection' },
      { label: 'Attack Surface Management', href: '/products/attack-surface-management' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Incident Response', href: '/services/incident-response' },
      { label: 'Penetration Testing', href: '/services/penetration-testing' },
      { label: 'Security Audit', href: '/services/security-audit' },
      { label: 'Training & Education', href: '/services/training' },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Newsroom', href: '/resources/newsroom' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Research reports', href: '/resources' },
      { label: 'Webinars', href: '/resources?type=webinar' },
      { label: 'Threat glossary', href: '/resources?type=glossary' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft bg-ink-2">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div className="flex flex-col gap-4">
            <LogoMark />
            <p className="max-w-xs text-sm leading-relaxed text-body">
              Difaac defends organizations worldwide with intelligence-led threat detection,
              response, and digital risk protection.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                aria-label="Difaac on LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border border-line text-muted-2 transition-colors hover:border-brand hover:text-brand"
              >
                <Link2 className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Difaac on X"
                className="flex size-9 items-center justify-center rounded-lg border border-line text-muted-2 transition-colors hover:border-brand hover:text-brand"
              >
                <AtSign className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="Difaac on YouTube"
                className="flex size-9 items-center justify-center rounded-lg border border-line text-muted-2 transition-colors hover:border-brand hover:text-brand"
              >
                <Rss className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-text">{column.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-body transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-soft pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-2">
            &copy; {new Date().getFullYear()} Difaac. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-2 hover:text-body">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-2 hover:text-body">
              Terms of use
            </Link>
            <Link href="/cookies" className="text-xs text-muted-2 hover:text-body">
              Cookie policy
            </Link>
            <Link href="/sitemap" className="text-xs text-muted-2 hover:text-body">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
