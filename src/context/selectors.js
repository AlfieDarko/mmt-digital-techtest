export const selectProductById = (state, id) => {
  return state?.products.byId[id]
}

export const getNewProductQuantity = (state, id, changeInQuantity) => {
  const product = selectProductById(state, id)
  if (product.quantity === 0 && changeInQuantity < 0) {
    throw new Error('Cannot reduce quantity below 0. Please try again')
  }
  return product.quantity + changeInQuantity
}

export const getProducts = (state) => {
  return state.products.byId
}