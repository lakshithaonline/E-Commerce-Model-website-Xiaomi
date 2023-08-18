const CURRENCY_FORMATTER = new Intl.NumberFormat('en-LK', {
  currency: 'LKR',
  style: 'currency',
  minimumFractionDigits: 0, // Set this to 0 to remove cents
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
