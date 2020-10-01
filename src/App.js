import React from 'react';
import { ProductBasketProvider } from './context/provider';
import ViewBasket from './viewBasket'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <ProductBasketProvider>
          <ViewBasket />
        </ProductBasketProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
