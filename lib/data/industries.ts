export type Industry = {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
}

export const industries: Industry[] = [
  { slug: 'financial-services', name: 'Financial Services', icon: 'Landmark', tagline: 'Defend transactions and accounts at scale.', description: 'Banks and payment providers rely on Difaac to stop account takeover, payment fraud, and targeted intrusion attempts.' },
  { slug: 'government', name: 'Government', icon: 'Building2', tagline: 'Protect critical public infrastructure.', description: 'National agencies use Difaac intelligence to track state-sponsored activity and defend citizen-facing systems.' },
  { slug: 'telecom', name: 'Telecom', icon: 'Radio', tagline: 'Secure networks that everything else depends on.', description: 'Telecom operators use Difaac to monitor for SIM-swap fraud, network intrusion, and subscriber data exposure.' },
  { slug: 'retail-ecommerce', name: 'Retail & eCommerce', icon: 'ShoppingCart', tagline: 'Stop fraud without slowing down checkout.', description: 'Retailers use Difaac to detect account takeover, promo abuse, and card testing without adding friction.' },
  { slug: 'crypto', name: 'Crypto', icon: 'Coins', tagline: 'Track threats unique to digital assets.', description: 'Exchanges and custodians rely on Difaac to monitor wallet-draining schemes, phishing kits, and exchange impersonation.' },
  { slug: 'healthcare', name: 'Healthcare', icon: 'HeartPulse', tagline: 'Protect patient data and clinical systems.', description: 'Healthcare providers use Difaac to defend against ransomware and safeguard connected medical devices.' },
  { slug: 'energy-utility', name: 'Energy & Utility', icon: 'Zap', tagline: 'Defend the systems that keep the lights on.', description: 'Utilities use Difaac to monitor OT environments and detect intrusion attempts before they reach control systems.' },
  { slug: 'manufacturing', name: 'Manufacturing', icon: 'Factory', tagline: 'Secure production without downtime.', description: 'Manufacturers use Difaac to protect industrial control systems and intellectual property from targeted theft.' },
  { slug: 'oil-gas', name: 'Oil & Gas', icon: 'Fuel', tagline: 'Protect extraction and distribution networks.', description: 'Operators use Difaac to secure remote facilities and industrial networks against disruption.' },
  { slug: 'saas', name: 'SaaS', icon: 'Server', tagline: 'Protect the platform your customers trust.', description: 'SaaS companies use Difaac to detect credential stuffing, API abuse, and tenant-level compromise.' },
  { slug: 'insurance', name: 'Insurance', icon: 'Umbrella', tagline: 'Reduce claims fraud and policyholder risk.', description: 'Insurers use Difaac intelligence to validate claims and detect coordinated fraud rings.' },
  { slug: 'ot-ics', name: 'OT/ICS', icon: 'Cpu', tagline: 'Secure operational technology environments.', description: 'Industrial operators use Difaac to monitor OT networks that were never designed for the internet.' },
  { slug: 'law-enforcement', name: 'Law Enforcement', icon: 'Scale', tagline: 'Support investigations with actionable evidence.', description: 'Agencies partner with Difaac for cyber investigation support and structured evidence packages.' },
  { slug: 'online-gambling', name: 'Online Gambling', icon: 'Dice5', tagline: 'Detect fraud rings and bonus abuse.', description: 'Operators use Difaac to identify multi-accounting, bonus abuse, and money laundering patterns.' },
  { slug: 'regulatory-compliance', name: 'Regulatory Compliance', icon: 'FileCheck2', tagline: 'Meet reporting and audit obligations.', description: 'Compliance teams use Difaac reporting to satisfy regulatory and audit requirements.' },
]

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug)
}
