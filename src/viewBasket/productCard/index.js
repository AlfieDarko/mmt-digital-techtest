import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Image, } from '@chakra-ui/core'
import QuantityControl from './QuantityControl'
import ProductInformation from './ProductInformation'

const ProductCard = ({ imageSRC, title, description, price, quantity, id }) => {
  return (
    <Flex as="li" data-testid={`product-card-${id}`} >
      <Flex mb={8} pb={10} borderBottom="4px" borderStyle="dashed" borderColor="lightgrey">
        <Box>
          <Image
            size={["100px", "100px", "150px", "150px"]}
            display={['none', 'initial', 'initial', 'initial']}
            p={[2, 4, 6, 6]}
            objectFit="cover"
            src={imageSRC}
            alt={`image of ${title}`}
            data-testid={`image-${id}`}
          />
        </Box>

        <Box display="flex" justifyContent='space-between' flexDirection="column" >
          <ProductInformation description={description} title={title} price={price} id={id} />
          <QuantityControl id={id} title={title} quantity={quantity} />
        </Box>
      </Flex>
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
