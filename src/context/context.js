import { createContext, useContext } from 'react'

export const ProductBasketStateCtx = createContext()
export const ProductBasketDispatchCtx = createContext()


export const useProductBasketState = () => {
  const context = useContext(ProductBasketStateCtx);
  if (context === undefined) {
    throw new Error(
      "useProductBasketState() must be used within a ProductBasket Provider. Check you are using it correctly."
    );
  }
  return context;
}

export const useProductBasketDispatch = () => {
  const context = useContext(ProductBasketDispatchCtx);
  if (context === undefined) {
    throw new Error(
      "useProductBasketDispatch() must be used within a ProductBasket Provider. Check you are using it correctly."
    );
  }
  return context;
}

export const useProductBasket = () => {
  return [useProductBasketState(), useProductBasketDispatch()]
}
