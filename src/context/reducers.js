import React from 'react'
import { initBasketState } from './initialState'

export const productBasketReducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_QUANTITY": {
      const { payload: { id, quantity } } = action;
      return {
        ...state, products: {
          ...state.products, byId: {
            ...state.products.byId, [id]: {
              ...state.products.byId[id], quantity
            }
          }
        }
      }
    }

    case "CLEAR_BASKET": {
      return {
        ...initBasketState
      }
    }

    default: {
      return state
    }
  }
}