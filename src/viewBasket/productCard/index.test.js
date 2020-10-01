import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductCard from './index'
import { ProductBasketProvider } from '../../context/provider'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

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

describe('ProductCard', () => {
  const props = {
    imageSRC: "",
    title: "test product",
    description: "product description",
    price: 100,
    quantity: 2,
    id: 'drinkid3'
  }

  const providerProps = {
    state: {
      products: {
        byId: {
          "drinkid3": props
        }
      }
    }
  }

  it('should find correct elements in the DOM', () => {
    customRender(
      <ProductCard {...props} />, { providerProps }
    )

    expect(screen.getByTestId('price-drinkid3').textContent).toBe('£1.00')
    expect(screen.getByTestId('description-drinkid3').textContent).toBe('product description')
    expect(screen.getByTestId('product-quantity-drinkid3').textContent).toBe("2")
    expect(screen.getByTestId('product-card-drinkid3')).toBeInTheDocument()
    expect(screen.getByTestId('increase-quantity-btn-drinkid3')).toBeInTheDocument()
    expect(screen.getByTestId('decrease-quantity-btn-drinkid3')).toBeInTheDocument()
  })
})