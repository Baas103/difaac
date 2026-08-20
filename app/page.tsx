import { HeroSection } from '@/components/home/hero-section'
import { TrustBar } from '@/components/home/trust-bar'
import { ProductsOverview } from '@/components/home/products-overview'
import { SolutionsByRole } from '@/components/home/solutions-by-role'
import { IntelHighlight } from '@/components/home/intel-highlight'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ResourcesPreview } from '@/components/home/resources-preview'
import { CTABanner } from '@/components/cta-banner'

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductsOverview />
      <SolutionsByRole />
      <IntelHighlight />
      <TestimonialsSection />
      <ResourcesPreview />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            title="Ready to see your risk before attackers do?"
            description="Talk to a Difaac security expert and get a tailored view of your exposure across the surface, dark web, and fraud landscape."
          />
        </div>
      </section>
    </>
  )
}
