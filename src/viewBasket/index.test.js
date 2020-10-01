import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ViewBasket from './index'
import { ProductBasketProvider } from '../context/provider'
import { ThemeProvider } from '@chakra-ui/core'
import { initBasketState } from '../context/initialState'

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

describe('ViewBasket Integrational', () => {

  describe('GIVEN we have increased the quantity of one item ', () => {


    it('SHOULD find we are able to see the total price', () => {
      customRender(
        <ViewBasket />, { providerProps: initBasketState }
      )
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
      expect(screen.getByTestId('total-price').textContent).toBe("£1.09")
    });

    it('SHOULD find that the quantity has increased', () => {
      customRender(
        <ViewBasket />, { providerProps: initBasketState }
      )
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))

      expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("1")
    });
  });

  describe('GIVEN we have increased the price of two items', () => {

    it('SHOULD find we are able to see the total price change in real time', () => {
      customRender(
        <ViewBasket />, { providerProps: initBasketState }
      )
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))

      expect(screen.getByTestId('total-price').textContent).toBe("£2.18")
    });

    it('SHOULD find that the quantity has increased', () => {
      customRender(
        <ViewBasket />, { providerProps: initBasketState }
      )
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))

      expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("2")
    });
  });

  describe.skip('GIVEN we want to clear our basket', () => {
    it('SHOULD find that the total price should be updated to its initial state of £0.00', () => {
      customRender(
        <ViewBasket />, { providerProps: initBasketState }
      )
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
      fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
      expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("2")

      fireEvent.click(screen.getByTestId('clear-btn'))
      expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
      expect(screen.getByTestId('total-price').textContent).toBe("£0.00")

    });
  });
});