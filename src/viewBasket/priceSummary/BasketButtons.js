import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { CLEAR_BTN_TEXT, CHECKOUT_BTN_TEXT } from '../constants'

const BasketButtons = () => {
  const [, dispatch] = useProductBasket()
  const clearOnClickHandler = () => {
    dispatch({ type: 'CLEAR_BASKET' })
  }

  return (
    <>
      <Flex mt="8" py="8" pr="4" alignItems="center" justifyContent="space-between" bg="#F8F8F7">
        <Button rol ml={8} variant="outline" onClick={clearOnClickHandler} data-testid="clear-btn">
          {CLEAR_BTN_TEXT}
        </Button>
        <Button color="white" bg="#44b8f3" borderRadius="5px" p={5} data-testid="checkout-btn">
          <Text fontWeight="bold" color="#1b212c">{CHECKOUT_BTN_TEXT}</Text>
        </Button>
      </Flex>
    </>
  )
}

export default BasketButtons
