import React from 'react'
import QuantityControl from './QuantityControl'
import { render } from '@testing-library/react'
import { ProductBasketProvider } from '../../context/provider'
import { ThemeProvider } from '@chakra-ui/core'

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

describe('QuantityControl', () => {
  const props = {
    imageSRC: "",
    title: "test product",
    description: "product description",
    price: 100,
    quantity: 2,
    id: 'beer1'
  }

  const providerProps = {
    state: {
      products: {
        byId: {
          "beer1": props
        }
      }
    }
  }

  it('Should match snapshots', () => {
    const { asFragment } = customRender(<QuantityControl {...props} />, { providerProps });
    expect(asFragment()).toMatchSnapshot();
  });
});