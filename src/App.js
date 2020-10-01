import React from 'react';
import { ProductBasketProvider } from './context/provider';
import ViewBasket from './viewBasket'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <ProductBasketProvider>
          <ViewBasket />
        </ProductBasketProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
