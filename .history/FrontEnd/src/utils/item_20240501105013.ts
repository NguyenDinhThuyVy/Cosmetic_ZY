export function formatcurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}
