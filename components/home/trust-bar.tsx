const logos = [
  'Meridian Bank',
  'Northfield Retail',
  'Vantage Telecom',
  'Aurora Health',
  'Pallas Energy',
  'Continental Freight',
]

export function TrustBar() {
  return (
    <section className="border-b border-line-soft bg-ink-2">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-muted-2">
          Trusted by security teams at
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center text-center text-sm font-semibold text-muted-2/80 grayscale transition-colors hover:text-body"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
