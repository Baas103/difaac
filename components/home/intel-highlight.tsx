import { Globe2, Radar, ShieldAlert, Zap } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: 'Global sensor network',
    description: 'Telemetry from 70+ countries feeds a constantly updated view of adversary activity.',
  },
  {
    icon: Radar,
    title: 'Adversary-centric tracking',
    description: 'Profiles for 1,000+ threat actors and groups, mapped to MITRE ATT&CK.',
  },
  {
    icon: ShieldAlert,
    title: 'Early-warning alerts',
    description: 'Get notified the moment your assets, credentials, or brand appear in attacker chatter.',
  },
  {
    icon: Zap,
    title: 'Automated enrichment',
    description: 'Indicators are enriched and scored automatically before they ever reach an analyst.',
  },
]

export function IntelHighlight() {
  return (
    <section className="border-b border-line-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">
              Threat intelligence
            </span>
            <h2 className="text-balance font-display font-semibold leading-tight text-text text-[clamp(28px,3.4vw,48px)]">
              Intelligence that comes from the source, not the surface
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-body">
              Difaac&apos;s intelligence is collected directly from closed criminal communities, dark
              web marketplaces, and malware infrastructure &mdash; not scraped from public feeds. That
              means earlier warning and fewer false positives.
            </p>
            <LinkButton href="/products/threat-intelligence" className="w-fit">
              Explore Threat Intelligence
              <ArrowRight className="size-4" data-icon="inline-end" aria-hidden="true" />
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-2xl border border-line bg-ink-2 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-text">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
