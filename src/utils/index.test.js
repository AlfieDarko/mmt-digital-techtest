import { priceFormatter } from './index'

describe('PriceFormatter', () => {
  it('should return the correct price given a specified unit', () => {
    const unit = 1000
    expect(priceFormatter(unit)).toBe("£10.00")
  });

  it('should return the correct price given the specified currency option', () => {
    const unit = 1000
    expect(priceFormatter(unit, "USD")).toBe("$10.00")
  });

});