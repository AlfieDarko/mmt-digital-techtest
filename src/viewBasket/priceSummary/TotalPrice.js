import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/core'
import { getTotalPrice } from '../../utils'
import { useProductBasket } from '../../context/context'

const TotalPrice = () => {
  const [state, dispatch] = useProductBasket()

  return (
    <>
      <Flex flexDirection="inherit" justifyContent="space-between" data-testid="total-amount">
        <Heading as="span" size="sm" >
          Total:
            </Heading>
        <Text pl={32} as="span" fontWeight="bold" data-testid="total-price">{getTotalPrice(state)}</Text>
      </Flex>
    </>
  )
}

export default TotalPrice
