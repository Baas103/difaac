import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { products } from '@/lib/data/products'
import { getIcon } from '@/components/icons/icon-map'

export function ProductsOverview() {
  return (
    <section className="border-b border-line-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The platform"
          title="One platform, every layer of defense"
          description="Difaac brings together the products enterprise security teams need to detect, investigate, and respond to threats across the entire attack surface."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = getIcon(product.icon)
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-line bg-ink-2 p-6 transition-colors hover:border-brand/40 hover:bg-ink-3"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-2 transition-colors group-hover:text-brand"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-semibold text-text">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-body">{product.tagline}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
