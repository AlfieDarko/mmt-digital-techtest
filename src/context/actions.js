export const clearBasket = (dispatch) => {
  dispatch({ type: 'CLEAR_BASKET' })
}

export const changeProductQuantity = (id, quantity, dispatch) => {
  dispatch({ type: "CHANGE_QUANTITY", payload: { id, quantity } })
}