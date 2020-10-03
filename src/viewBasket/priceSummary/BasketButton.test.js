import React from "react";
import { render } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import BasketButtons from './'
import { ProductBasketProvider } from '../../context/provider'

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

describe('ProdutInformation', () => {
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
    const { asFragment } = customRender(<BasketButtons />, { providerProps });
    expect(asFragment()).toMatchSnapshot();
  });
});