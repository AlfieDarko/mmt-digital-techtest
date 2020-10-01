import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/core'
import PriceSummary from './priceSummary'
import ProductsBox from './productsBox'

const ViewBasket = () => {
  return (
    <Flex justifyContent="center" pt={16} px={16} data-testid="view-basket" >
      <Box >
        <Heading as="h1" size="lg" mb={8}>
          Shopping Cart
        </Heading>
        <ProductsBox />
        <PriceSummary />
      </Box>
    </Flex>
  )
}

export default ViewBasket
