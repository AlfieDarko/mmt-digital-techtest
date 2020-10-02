import { createContext, useContext } from 'react'
import {
  USE_PRODUCT_BASKET_STATE_ERROR,
  USE_PRODUCT_BASKET_DISPATCH_ERROR
} from './constants'

export const ProductBasketStateCtx = createContext()
export const ProductBasketDispatchCtx = createContext()

export const useProductBasketState = () => {
  const context = useContext(ProductBasketStateCtx);
  if (context === undefined) {
    throw new Error(USE_PRODUCT_BASKET_STATE_ERROR);
  }
  return context;
}

export const useProductBasketDispatch = () => {
  const context = useContext(ProductBasketDispatchCtx);
  if (context === undefined) {
    throw new Error(USE_PRODUCT_BASKET_DISPATCH_ERROR);
  }
  return context;
}

export const useProductBasket = () => {
  return [useProductBasketState(), useProductBasketDispatch()]
}
