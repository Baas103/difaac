import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CTABanner } from '@/components/cta-banner'
import { SectionHeading } from '@/components/section-heading'
import { getIcon } from '@/components/icons/icon-map'
import { getProductBySlug, products } from '@/lib/data/products'
import { ProductCard } from '@/components/product-card'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Difaac`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const Icon = getIcon(product.icon)
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={product.name}
        description={product.description}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <section className="border-b border-line-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="flex flex-col gap-6">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h2 className="font-display text-2xl font-semibold text-text">{product.tagline}</h2>
              <ul className="flex flex-col gap-3">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="flex flex-col gap-2 rounded-2xl border border-line bg-ink-2 p-6"
                >
                  <h3 className="text-sm font-semibold text-text">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Explore more" title="Related products" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            title={`See ${product.name} in action`}
            description="Schedule a walkthrough with a Difaac specialist tailored to your environment."
          />
        </div>
      </section>
    </>
  )
}
