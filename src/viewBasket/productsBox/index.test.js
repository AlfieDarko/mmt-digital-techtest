import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductsBox from './index'
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

describe('ProductsBox', () => {
  it('should find multiple Product Cards', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )

    expect(screen.getByTestId('product-card-drinkid1')).toBeInTheDocument()
    expect(screen.getByTestId('product-card-drinkid2')).toBeInTheDocument()
    expect(screen.getByTestId('product-card-drinkid3')).toBeInTheDocument()
  });


  it('should find that we can increase the quantity for product "drinkid1"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("1")
  });

  it('should find that we can increase the quantity for product "drinkid2"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid2').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid2'))
    expect(screen.getByTestId('product-quantity-drinkid2').textContent).toBe("1")
  });

  it('should find that we can increase the quantity for product "drinkid3"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid3'))
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("1")
  });

  it('should find that we can increase + decrease the quantity for product "drinkid1"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid1'))
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("3")
    fireEvent.click(screen.getByTestId('decrease-quantity-btn-drinkid1'))
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("2")
  });

  it('should find that we can increase + decrease the quantity for product "drinkid2"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid2').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid2'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid2'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid2'))
    expect(screen.getByTestId('product-quantity-drinkid2').textContent).toBe("3")
    fireEvent.click(screen.getByTestId('decrease-quantity-btn-drinkid2'))
    expect(screen.getByTestId('product-quantity-drinkid2').textContent).toBe("2")
  });

  it('should find that we can increase + decrease the quantity for product "drinkid3"', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid3'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid3'))
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid3'))
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("3")
    fireEvent.click(screen.getByTestId('decrease-quantity-btn-drinkid3'))
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("2")
  });

  it('should find our decrease button is disabled if quantity is on zero', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
    expect(screen.getByTestId('decrease-quantity-btn-drinkid1').closest('button')).toHaveAttribute('disabled');
  });

  it('should find we are not able to reduce the quantity below zero', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('decrease-quantity-btn-drinkid1'))
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
  });

  it('should find we are not able to affect the quantity of other products', () => {
    customRender(
      <ProductsBox />, { providerProps: initBasketState }
    )
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
    fireEvent.click(screen.getByTestId('increase-quantity-btn-drinkid3'))
    expect(screen.getByTestId('product-quantity-drinkid1').textContent).toBe("0")
  });
});