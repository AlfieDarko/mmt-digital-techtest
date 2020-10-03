import ShippingPrice from './ShippingPrice'
import React from "react";
import { render } from '@testing-library/react'

describe('ShippingPrice', () => {
  it('Should match snapshots', () => {
    const { asFragment } = render(<ShippingPrice price={100} />);
    expect(asFragment()).toMatchSnapshot();
  });
});