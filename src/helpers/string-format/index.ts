const currency = (amount = 0, hideSymbol?: boolean) => {
  const isNegative = amount < 0
  const sign = isNegative ? '- ' : ''
  const positiveAmount = Math.abs(amount)
  const normalizedAmount = positiveAmount / 100

  const localizedAmount = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(normalizedAmount)

  return `${sign}${hideSymbol ? '' : 'R$ '}${localizedAmount}`
}

export const stringFormat = { currency }
