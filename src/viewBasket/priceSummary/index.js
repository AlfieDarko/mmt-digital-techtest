import React, { setState, useEffect } from 'react'
import { Box, Flex, Stack, Text, Heading, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { priceFormatter, getTotalPrice } from '../../utils'

const PriceSummary = () => {
  const [state, dispatch] = useProductBasket()

  const clearOnClickHandler = () => {
    dispatch({ type: 'CLEAR_BASKET' })
  }

  return (
    <Flex data-testid="price-summary" data-testid="price-summary">
      <Box backgroundColor="#FFF" pt="12" borderStyle="solid" borderColor="#D9D6D3" width="100%">
        <Heading as="h2" size="lg" mb={8}>
          Summary
        </Heading>

        <Box>
          <Flex flexDirection="inherit" justifyContent="space-between" data-testid="total-amount">
            <Heading as="span" size="sm" >
              Total:
            </Heading>
            <Text pl={32} as="span" fontWeight="bold" data-testid="total-price">{getTotalPrice(state)}</Text>
          </Flex>

          <Flex flexDirection="inherit" justifyContent="space-between">
            <Heading as="span" size="sm" >
              Shipping:
            </Heading>
            <Text pl={32} as="span">FREE</Text>
          </Flex>
        </Box>

        <Flex mt="24" py="8" pr="4" alignItems="center" justifyContent="space-between" bg="#F8F8F7">
          <Button ml={8} variant="outline" onClick={clearOnClickHandler} data-testid="clear-btn">
            Clear
            </Button>
          <Button color="white" bg="#6EBAE0" borderRadius="5px" p={5} data-testid="checkout-btn">
            <Text fontWeight="bold">{"Check Out >"}</Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PriceSummary
