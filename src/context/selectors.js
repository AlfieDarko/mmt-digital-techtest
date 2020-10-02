import { GET_NEW_PRODUCT_QUANTITY_ERROR } from './constants'

export const selectProductById = (state, id) => {
  return state?.products.byId[id]
}

export const getNewProductQuantity = (state, id, changeInQuantity) => {
  const product = selectProductById(state, id)
  if (product.quantity === 0 && changeInQuantity < 0) {
    throw new Error(GET_NEW_PRODUCT_QUANTITY_ERROR)
  }
  return product.quantity + changeInQuantity
}

export const getProducts = (state) => {
  return state.products.byId
}

