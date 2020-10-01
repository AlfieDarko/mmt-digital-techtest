import React from 'react'
import { ProductBasketStateCtx, ProductBasketDispatchCtx } from './context'
import { productBasketReducer } from './reducers'
import { useReducer } from 'react'
import { initBasketState } from './initialState'

export const ProductBasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productBasketReducer, initBasketState)

  return (
    <ProductBasketStateCtx.Provider value={state}>
      <ProductBasketDispatchCtx.Provider value={dispatch}>
        {children}
      </ProductBasketDispatchCtx.Provider>
    </ProductBasketStateCtx.Provider>
  )
}

