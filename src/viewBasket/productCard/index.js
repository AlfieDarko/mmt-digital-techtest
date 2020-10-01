import React from 'react'
import { Box, Flex, Text, Heading, Image, Stack, Icon, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
const ProductCard = ({ imageSRC, title, description, price, quantity, id }) => {
  const [state, dispatch] = useProductBasket()
  return (
    <Flex data-testid={`product-card-${id}`} >
    </Flex >
  )
}

ProductCard.propTypes = {
  imageSRC: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}


export default ProductCard
