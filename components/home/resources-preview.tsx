import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ResourceCard } from '@/components/resource-card'
import { resources } from '@/lib/data/resources'
import Link from 'next/link'

export function ResourcesPreview() {
  return (
    <section className="border-b border-line-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research & insight"
          title="Intelligence worth reading"
          description="Reports, playbooks, and research from the Difaac Threat Intelligence team."
          action={
            <Link
              href="/resources"
              className="link-underline hidden items-center gap-1.5 text-sm font-semibold text-brand sm:flex"
            >
              View all resources
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.slice(0, 3).map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
