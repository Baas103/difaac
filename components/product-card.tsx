import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getIcon } from '@/components/icons/icon-map'
import type { Product } from '@/lib/data/products'

export function ProductCard({ product }: { product: Product }) {
  const Icon = getIcon(product.icon)

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-line-soft bg-ink-3 p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-line"
    >
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-brand-ink text-brand">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <ChevronRight className="size-4 text-muted-2 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand group-hover:opacity-100" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-text">{product.name}</h3>
        <p className="text-sm leading-relaxed text-body">{product.tagline}</p>
      </div>
    </Link>
  )
}
