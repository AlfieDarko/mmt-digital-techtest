import React from 'react'
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { getTotalPrice } from '../../utils'

const PriceSummary = () => {
  const [state, dispatch] = useProductBasket()

  const clearOnClickHandler = () => {
    dispatch({ type: 'CLEAR_BASKET' })
  }

  return (
    <Flex as="section" data-testid="price-summary" data-testid="price-summary">
      <Box backgroundColor="#FFF" mt="8" borderStyle="solid" borderColor="#D9D6D3" width="100%">
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

        <Flex mt="8" py="8" pr="4" alignItems="center" justifyContent="space-between" bg="#F8F8F7">
          <Button rol ml={8} variant="outline" onClick={clearOnClickHandler} data-testid="clear-btn">
            Clear
            </Button>
          <Button color="white" bg="#44b8f3" borderRadius="5px" p={5} data-testid="checkout-btn">
            <Text fontWeight="bold" color="#1b212c">{"Check Out >"}</Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PriceSummary
