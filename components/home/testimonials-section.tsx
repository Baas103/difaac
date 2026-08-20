import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="border-b border-line-soft bg-ink-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer stories"
          title="Security leaders rely on Difaac every day"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
