import React from 'react'
import ProductCard from '../productCard'
import { Flex, Stack } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { getProducts } from '../../context/selectors'

const ProductBox = () => {
  const [state] = useProductBasket()
  const products = getProducts(state)

  const renderProductCards = () =>
    Object.values(products).map(
      value => (
        <ProductCard key={value.id} {...value} />
      )
    )

  return (
    <Flex as="section">
      <Stack as="ul">
        {renderProductCards()}
      </Stack>
    </Flex>
  )
}

export default ProductBox
