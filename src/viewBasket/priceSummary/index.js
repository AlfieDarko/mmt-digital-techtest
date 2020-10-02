import React from 'react'
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/core'
import TotalPrice from './TotalPrice'
import BasketButtons from './BasketButtons'
import ShippingPrice from './ShippingPrice'

const PriceSummary = () => {
  return (
    <Flex as="section" data-testid="price-summary" data-testid="price-summary">
      <Box backgroundColor="#FFF" mt="8" borderStyle="solid" borderColor="#D9D6D3" width="100%">
        <Heading as="h2" size="lg" mb={8}>
          Summary
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
