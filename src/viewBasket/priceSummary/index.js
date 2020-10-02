import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'
import TotalPrice from './TotalPrice'
import BasketButtons from './BasketButtons'
import ShippingPrice from './ShippingPrice'
import { SUMMARY } from '../constants'

const PriceSummary = () => {
  return (
    <Flex as="section" data-testid="price-summary">
      <Box backgroundColor="#FFF" mt="8" borderStyle="solid" borderColor="#D9D6D3" width="100%">
        <Heading as="h2" size="lg" mb={8}>
          {SUMMARY}
        </Heading>

        <Box>
          <TotalPrice />
          <ShippingPrice />
        </Box>
        <BasketButtons />
      </Box>
    </Flex>
  )
}

export default PriceSummary
