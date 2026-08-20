import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { LinkButton } from '@/components/link-button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line-soft">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/threat-report-2026"
            className="link-underline mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-line bg-ink-2 px-4 py-1.5 text-xs font-medium text-body"
          >
            <ShieldCheck className="size-3.5 text-brand" aria-hidden="true" />
            2026 Global Threat Landscape Report is here
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>

          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            See threats before they become breaches
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-body">
            Difaac unifies threat intelligence, fraud protection, managed detection and response,
            and digital risk protection into a single platform that stops attackers before they
            reach you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/talk-to-sales" size="lg" className="hover:shadow-glow">
              Talk to sales
              <ArrowRight className="size-4" data-icon="inline-end" aria-hidden="true" />
            </LinkButton>
            <LinkButton href="/products" variant="secondary" size="lg">
              Explore the platform
            </LinkButton>
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-line-soft pt-10 sm:grid-cols-4">
          {[
            { value: '1,200+', label: 'Enterprise customers' },
            { value: '70+', label: 'Countries protected' },
            { value: '99.9%', label: 'Threat detection accuracy' },
            { value: '24/7', label: 'Global SOC coverage' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-semibold text-text sm:text-3xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted-2">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
