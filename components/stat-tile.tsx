export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-line-soft bg-ink-3 p-6">
      <span className="font-display text-4xl font-semibold text-text sm:text-5xl">{value}</span>
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-2">{label}</span>
    </div>
  )
}
