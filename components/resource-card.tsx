import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import type { Resource } from '@/lib/data/resources'

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-line-soft bg-ink-3 p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-line"
    >
      <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-2 to-brand-ink">
        {resource.isNew ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-ink">
            New
          </span>
        ) : null}
        <FileText className="size-10 text-brand/70" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">{resource.type}</span>
        <h3 className="text-base font-semibold leading-snug text-text">{resource.title}</h3>
        <p className="text-sm leading-relaxed text-body line-clamp-2">{resource.excerpt}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-body transition-colors group-hover:text-brand">
          Learn more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
