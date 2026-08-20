import type { Testimonial } from '@/lib/data/testimonials'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-line-soft bg-ink-3 p-7 shadow-card">
      <blockquote className="font-display text-lg italic leading-relaxed text-text">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-ink font-display text-sm font-semibold text-brand">
          {testimonial.company.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text">{testimonial.name}</span>
          <span className="text-xs text-muted-2">
            {testimonial.title}, {testimonial.company}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
