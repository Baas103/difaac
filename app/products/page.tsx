import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { CTABanner } from '@/components/cta-banner'
import { products } from '@/lib/data/products'

export const metadata: Metadata = {
  title: 'Products — Difaac',
  description: 'Explore the Difaac platform: threat intelligence, fraud protection, managed XDR, attack surface management, and digital risk protection.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One platform for every layer of defense"
        description="Difaac unifies eight products into a single intelligence-driven platform, so your team can detect, investigate, and respond without switching tools."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            title="Not sure where to start?"
            description="Tell us about your environment and we will recommend the right combination of products for your team."
          />
        </div>
      </section>
    </>
  )
}
