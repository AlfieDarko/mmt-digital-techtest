
export const priceFormatter = (price, currency = 'GBP', options) => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
    ...(options)
  });

  return formatter.format(price / 100)
}

export const getTotalPrice = (state) => {
  const productsInBasket = Object.values(state.products.byId)
  const totalPriceInPennies = productsInBasket.reduce((sum, product) => {
    return sum + (product.price * product.quantity)
  }, 0)
  const formattedTotalPrice = priceFormatter(totalPriceInPennies)
  return formattedTotalPrice
}

