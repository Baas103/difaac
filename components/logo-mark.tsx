import Link from 'next/link'
import { Shield } from 'lucide-react'

export function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ''}`} aria-label="Difaac home">
      <Shield className="size-5 text-brand" strokeWidth={2.25} aria-hidden="true" />
      <span className="font-display text-lg font-bold tracking-tight text-text">Difaac</span>
    </Link>
  )
}
