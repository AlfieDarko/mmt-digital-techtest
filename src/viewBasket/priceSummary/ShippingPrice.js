import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'

const ShippingPrice = ({ shippingPrice }) => {
  return (
    <>
      <Flex flexDirection="inherit" justifyContent="space-between">
        <Heading as="span" size="sm" >
          Shipping:
            </Heading>
        <Text pl={32} as="span">{shippingPrice}</Text>
      </Flex>
    </>
  )
}

ShippingPrice.defaultProps = {
  shippingPrice: 'free'
}
export default ShippingPrice
