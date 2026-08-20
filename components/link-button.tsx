import Link from 'next/link'
import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'lg' | 'sm'
  className?: string
}

const variantClasses: Record<string, string> = {
  primary: 'bg-brand text-brand-ink hover:bg-brand-bright hover:shadow-glow',
  secondary: 'border border-line bg-transparent text-text hover:bg-ink-3 hover:border-line',
  ghost: 'bg-transparent text-body hover:text-text',
}

const sizeClasses: Record<string, string> = {
  default: 'h-11 px-5',
  lg: 'h-12 px-6 text-base',
  sm: 'h-9 px-4 text-sm',
}

export function LinkButton({
  variant = 'primary',
  size = 'default',
  className,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Button
      render={<Link href={href} {...props} />}
      nativeButton={false}
      className={cn(
        'rounded-xl font-semibold transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Button>
  )
}
