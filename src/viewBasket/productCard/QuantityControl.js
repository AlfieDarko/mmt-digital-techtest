import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Icon, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { changeProductQuantity } from '../../context/actions'
import { getNewProductQuantity } from '../../context/selectors'

const QuantityControl = ({ id, title, quantity }) => {
  const [state, dispatch] = useProductBasket()

  const onClickHandler = (id, changeInQuantity) => {
    const newQuantity = getNewProductQuantity(state, id, changeInQuantity)
    changeProductQuantity(id, newQuantity, dispatch)
  }

  return (
    <>
      <Flex data-testid="quantity" justifyContent="space-between">
        <Flex alignItems="center" pr={12} >Quantity: </Flex>
        <Box display="flex">
          <Button p="0" onClick={() => onClickHandler(id, +1)} data-testid={`increase-quantity-btn-${id}`}>
            <Icon name="triangle-up" size="20px" aria-label={`increase quantity of ${title}`} />
          </Button>
          <Flex alignItems="center" px="3" data-testid={`product-quantity-${id}`}>{quantity}</Flex>

          <Button p="0" disabled={quantity === 0} data-testid={`decrease-quantity-btn-${id}`} alt={`decrease quantity of ${title}`} onClick={() => onClickHandler(id, -1)} >
            <Icon name="triangle-down" size="20px" aria-label={`decrease quantity of ${title}`} />
          </Button>
        </Box>
      </Flex>
    </>
  )
}

QuantityControl.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}


export default QuantityControl
