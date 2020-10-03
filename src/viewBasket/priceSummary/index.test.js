import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PriceSummary from './index'
import { ProductBasketProvider } from '../../context/provider'
import { ThemeProvider } from '@chakra-ui/core'
import { initBasketState } from '../../context/initialState'

const customRender = (ui, {
  providerProps, ...renderOptions
}) => {
  return render(
    <ProductBasketProvider {...providerProps}>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </ProductBasketProvider>, renderOptions
  )
}

describe('PriceSummary', () => {
  it('should be found in the document', () => {
    customRender(
      <PriceSummary />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('price-summary')).toBeInTheDocument()
  });

  it('should find a total price of £0', () => {
    customRender(
      <PriceSummary />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('total-price').textContent).toBe('£0.00')
  });

  it('should find the clear button', () => {
    customRender(
      <PriceSummary />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('clear-btn')).toBeInTheDocument()
    expect(screen.getByTestId('clear-btn').textContent).toBe("Clear")

  });

  it('should find the clear button with corrent content', () => {
    customRender(
      <PriceSummary />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('checkout-btn')).toBeInTheDocument()
    expect(screen.getByTestId('checkout-btn').textContent).toBe("Check Out >")
  });
});