export function formatcurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}
