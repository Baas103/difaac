'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const STORAGE_KEY = 'difaac-cookie-consent'

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = window.setTimeout(() => setVisible(true), 600)
      return () => window.clearTimeout(timer)
    }
  }, [])

  function handleChoice(choice: 'accepted' | 'rejected') {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line-soft bg-ink-2/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="max-w-2xl text-sm text-body">
          Difaac uses cookies to improve your experience, analyze traffic, and personalize
          content. Read our{' '}
          <Link href="/cookies" className="text-brand hover:text-brand-bright">
            cookie policy
          </Link>{' '}
          to learn more.
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-line bg-transparent text-text hover:bg-ink-3"
            onClick={() => handleChoice('rejected')}
          >
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-brand text-brand-ink hover:bg-brand-bright"
            onClick={() => handleChoice('accepted')}
          >
            Accept all
          </Button>
          <button
            type="button"
            aria-label="Dismiss cookie notice"
            className="text-muted-2 hover:text-body"
            onClick={() => handleChoice('rejected')}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
