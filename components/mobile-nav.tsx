'use client'

import Link from 'next/link'
import { Menu, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { LogoMark } from '@/components/logo-mark'
import { productsMenu, industriesMenu, solutionsMenu, servicesMenu } from '@/lib/data/mega-menu'
import { companyLinks } from '@/lib/data/nav'

function MobileLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-0.5 pb-2 pl-2">
      {items.map((item) => (
        <li key={item.href}>
          <SheetClose
            render={<Link href={item.href} />}
            nativeButton={false}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-ink-3 hover:text-text"
          >
            {item.label}
            <ChevronRight className="size-3.5 text-muted-2" aria-hidden="true" />
          </SheetClose>
        </li>
      ))}
    </ul>
  )
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
        className="lg:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm border-line bg-ink p-0 sm:max-w-sm">
        <SheetHeader className="border-b border-line-soft px-4 py-4">
          <SheetTitle>
            <LogoMark />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col overflow-y-auto px-2 py-4">
          <Accordion multiple defaultValue={[]}>
            <AccordionItem value="products">
              <AccordionTrigger className="px-3 text-sm font-semibold text-text">Products</AccordionTrigger>
              <AccordionContent>
                <MobileLinkList items={[{ label: productsMenu.platform.title, href: productsMenu.platform.href }, ...productsMenu.items.map((i) => ({ label: i.name, href: i.href }))]} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="industries">
              <AccordionTrigger className="px-3 text-sm font-semibold text-text">Industries</AccordionTrigger>
              <AccordionContent>
                <MobileLinkList items={industriesMenu.map((i) => ({ label: i.name, href: i.href }))} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="solutions">
              <AccordionTrigger className="px-3 text-sm font-semibold text-text">Solutions</AccordionTrigger>
              <AccordionContent>
                <MobileLinkList items={[...solutionsMenu.byUseCase, ...solutionsMenu.byRole].map((i) => ({ label: i.name, href: i.href }))} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="services">
              <AccordionTrigger className="px-3 text-sm font-semibold text-text">Services</AccordionTrigger>
              <AccordionContent>
                <MobileLinkList
                  items={[
                    ...servicesMenu.assessment.items,
                    ...servicesMenu.response.items,
                    ...servicesMenu.training.items,
                    ...servicesMenu.investigation.items,
                  ].map((i) => ({ label: i.name, href: i.href }))}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="company">
              <AccordionTrigger className="px-3 text-sm font-semibold text-text">Company</AccordionTrigger>
              <AccordionContent>
                <MobileLinkList items={companyLinks} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-4 flex flex-col gap-2 border-t border-line-soft px-3 pt-4">
            <SheetClose
              render={<Link href="/talk-to-sales" />}
              nativeButton={false}
              className="flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-brand-ink"
            >
              Talk to sales
            </SheetClose>
            <SheetClose
              render={<Link href="/sign-in" />}
              nativeButton={false}
              className="flex h-11 items-center justify-center rounded-xl border border-line px-5 text-sm font-semibold text-text"
            >
              Sign in
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
