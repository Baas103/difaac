import { getIcon } from '@/components/icons/icon-map'

type Feature = {
  title: string
  description: string
  icon?: string
}

export function FeatureGrid({ features, columns = 4 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'

  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
      {features.map((feature) => {
        const Icon = getIcon(feature.icon)
        return (
          <div
            key={feature.title}
            className="group flex flex-col gap-4 rounded-2xl border border-line-soft bg-ink-3 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-line"
          >
            {Icon ? (
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-ink text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </div>
            ) : null}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-body">{feature.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
