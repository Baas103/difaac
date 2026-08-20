'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { solutions } from '@/lib/data/solutions'
import { cn } from '@/lib/utils'

const roleSolutions = solutions.filter((s) => s.group === 'role')

export function SolutionsByRole() {
  const [activeSlug, setActiveSlug] = useState(roleSolutions[0]?.slug)
  const active = roleSolutions.find((s) => s.slug === activeSlug) ?? roleSolutions[0]

  return (
    <section className="border-b border-line-soft bg-ink-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built for your role"
          title="Security solutions tailored to how you work"
          description="Whether you lead the SOC, run fraud operations, or protect the brand, Difaac adapts to the workflows your team already relies on."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {roleSolutions.map((role) => (
              <button
                key={role.slug}
                type="button"
                onClick={() => setActiveSlug(role.slug)}
                className={cn(
                  'shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors lg:shrink',
                  role.slug === active?.slug
                    ? 'border-brand/50 bg-brand/10 text-text'
                    : 'border-line bg-transparent text-body hover:border-line hover:bg-ink-3',
                )}
              >
                {role.name}
              </button>
            ))}
          </div>

          {active ? (
            <div className="flex flex-col gap-6 rounded-2xl border border-line bg-ink p-8">
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-2xl font-semibold text-text">{active.name}</h3>
                <p className="text-pretty leading-relaxed text-body">{active.description}</p>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.highlights?.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-body">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link
                href={`/solutions/${active.slug}`}
                className="link-underline inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Explore this solution
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
