import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getIcon } from '@/components/icons/icon-map'
import { productsMenu, industriesMenu, solutionsMenu, servicesMenu } from '@/lib/data/mega-menu'
import { companyLinks } from '@/lib/data/nav'

const panelBase =
  'absolute left-1/2 top-full z-40 w-screen max-w-[900px] -translate-x-1/2 rounded-b-[14px] border border-line border-t-0 bg-ink-2 shadow-card transition-all duration-[180ms]'

function visibility(isOpen: boolean) {
  return isOpen
    ? 'pointer-events-auto translate-y-0 opacity-100'
    : 'pointer-events-none -translate-y-1.5 opacity-0'
}

export function ProductsMegaMenu({ isOpen }: { isOpen: boolean }) {
  const PlatformIcon = getIcon(productsMenu.platform.icon)
  return (
    <div className={`${panelBase} ${visibility(isOpen)}`}>
      <div className="grid grid-cols-[260px_1fr] gap-6 p-6">
        <Link
          href={productsMenu.platform.href}
          className="group flex flex-col justify-between gap-4 rounded-xl bg-brand-ink p-5 transition-colors hover:bg-brand-ink/80"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-ink/40 text-brand">
            <PlatformIcon className="size-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-base font-semibold text-text">{productsMenu.platform.title}</span>
            <span className="text-sm leading-relaxed text-body">{productsMenu.platform.description}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
            Explore platform
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-1">
          {productsMenu.items.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <Link
                key={item.slug}
                href={item.href}
                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-ink-3"
              >
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-brand">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-text">{item.name}</span>
                  <span className="text-xs leading-snug text-body">{item.tagline}</span>
                </div>
                <ChevronRight className="ml-auto mt-1.5 size-3.5 shrink-0 text-muted-2 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function IndustriesMegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${panelBase} ${visibility(isOpen)}`}>
      <div className="grid grid-cols-3 gap-1 p-6">
        {industriesMenu.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-ink-3"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-3 text-brand">
                <Icon className="size-4" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-text">{item.name}</span>
              <ChevronRight className="ml-auto size-3.5 shrink-0 text-muted-2 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100" aria-hidden="true" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function SolutionsMegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${panelBase} ${visibility(isOpen)}`}>
      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">By use case</span>
          <ul className="flex flex-col gap-1">
            {solutionsMenu.byUseCase.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-body transition-colors hover:bg-ink-3 hover:text-text">
                  {item.name}
                  <ChevronRight className="size-3.5 shrink-0 text-muted-2 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">By role</span>
          <ul className="flex flex-col gap-1">
            {solutionsMenu.byRole.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-body transition-colors hover:bg-ink-3 hover:text-text">
                  {item.name}
                  <ChevronRight className="size-3.5 shrink-0 text-muted-2 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">By industry</span>
          <p className="px-3 text-sm leading-relaxed text-body">Browse solutions organized by the industries Difaac serves.</p>
          <Link href="/industries" className="group inline-flex items-center gap-1 px-3 text-sm font-medium text-brand">
            View all industries
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ServicesMegaMenu({ isOpen }: { isOpen: boolean }) {
  const groups = [servicesMenu.assessment, servicesMenu.response, servicesMenu.training, servicesMenu.investigation]
  return (
    <div className={`${panelBase} ${visibility(isOpen)}`}>
      <div className="grid grid-cols-4 gap-6 p-6">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">{group.title}</span>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-lg px-3 py-1.5 text-sm text-body transition-colors hover:bg-ink-3 hover:text-text">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CompanyDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`absolute left-0 top-full z-40 w-64 -translate-x-1/4 rounded-[14px] border border-line bg-ink-2 shadow-card transition-all duration-[180ms] ${visibility(isOpen)}`}
    >
      <ul className="flex flex-col gap-0.5 p-2">
        {companyLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm text-body transition-colors hover:bg-ink-3 hover:text-text">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
