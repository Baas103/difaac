import { products } from '@/lib/data/products'
import { industries } from '@/lib/data/industries'
import { solutions } from '@/lib/data/solutions'
import { services } from '@/lib/data/services'

export const productsMenu = {
  platform: {
    title: 'Unified Risk Platform',
    description: 'The intelligence layer that unifies every Difaac product.',
    href: '/products',
    icon: 'ShieldCheck',
  },
  items: products.map((p) => ({
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    icon: p.icon,
    href: `/products/${p.slug}`,
  })),
}

export const industriesMenu = industries.map((i) => ({
  name: i.name,
  href: `/industries/${i.slug}`,
  icon: i.icon,
}))

export const solutionsMenu = {
  byUseCase: solutions.filter((s) => s.group === 'use-case').map((s) => ({ name: s.name, href: `/solutions/${s.slug}` })),
  byRole: solutions.filter((s) => s.group === 'role').map((s) => ({ name: s.name, href: `/solutions/${s.slug}` })),
}

export const servicesMenu = {
  assessment: { title: 'Assessment', items: services.filter((s) => s.group === 'assessment').map((s) => ({ name: s.name, href: `/services/${s.slug}` })) },
  response: { title: 'Response', items: services.filter((s) => s.group === 'response').map((s) => ({ name: s.name, href: `/services/${s.slug}` })) },
  training: { title: 'Training', items: services.filter((s) => s.group === 'training').map((s) => ({ name: s.name, href: `/services/${s.slug}` })) },
  investigation: { title: 'Hi-Tech Crime Investigation', items: services.filter((s) => s.group === 'investigation').map((s) => ({ name: s.name, href: `/services/${s.slug}` })) },
}
