import { LinkButton } from '@/components/link-button'

type CTABannerProps = {
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABanner({
  title,
  description,
  primaryCta = { label: 'Talk to an expert', href: '/talk-to-sales' },
  secondaryCta = { label: 'Request demo', href: '/talk-to-sales' },
}: CTABannerProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-brand/20 bg-brand-ink px-6 py-14 text-center sm:px-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(500px circle at 50% 0%, rgba(16,201,138,0.25), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
        <h2 className="text-balance font-display text-[clamp(28px,3.4vw,40px)] font-semibold text-text">{title}</h2>
        <p className="text-pretty leading-relaxed text-body">{description}</p>
        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <LinkButton href={primaryCta.href} size="lg">
            {primaryCta.label}
          </LinkButton>
          <LinkButton href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
