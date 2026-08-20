import { ArrowRight } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { Breadcrumb } from '@/components/breadcrumb'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  breadcrumb?: { label: string; href?: string }[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  primaryCta = { label: 'Talk to sales', href: '/talk-to-sales' },
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft bg-ink py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(600px circle at 20% 0%, rgba(16,201,138,0.12), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-12">
        {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">{eyebrow}</span>
          <h1 className="text-balance font-display font-semibold leading-[1.05] text-text text-[clamp(36px,5vw,60px)]">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty leading-relaxed text-body">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <LinkButton href={primaryCta.href} size="lg">
            {primaryCta.label}
            <ArrowRight className="size-4" data-icon="inline-end" aria-hidden="true" />
          </LinkButton>
          {secondaryCta ? (
            <LinkButton href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  )
}
