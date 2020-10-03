import ProductInformation from './ProductInformation'
import React from "react";
import { render } from '@testing-library/react'

describe('ProdutInformation', () => {
  it('Should match snapshots', () => {
    const { asFragment } = render(<ProductInformation title="Beer!" id="beer1" price={100} description="Nice German beverage" />);
    expect(asFragment()).toMatchSnapshot();
  });
});