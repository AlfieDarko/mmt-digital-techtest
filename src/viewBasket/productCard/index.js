import React from 'react'
import { Box, Flex, Text, Heading, Image, Stack, Icon, Button } from '@chakra-ui/core'
import { useProductBasket } from '../../context/context'
import { changeProductQuantity } from '../../context/actions'
import { getNewProductQuantity } from '../../context/selectors'
import { priceFormatter } from '../../utils'
import PropTypes from 'prop-types'

const ProductCard = ({ imageSRC, title, description, price, quantity, id }) => {
  const [state, dispatch] = useProductBasket()

  const onClickHandler = (event, id, changeInQuantity) => {
    const newQuantity = getNewProductQuantity(state, id, changeInQuantity)
    changeProductQuantity(id, newQuantity, dispatch)
  }

  return (
    <Flex data-testid={`product-card-${id}`} >
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
          <Stack spacing={2} justifyContent="space-between" flexDirection="column" >
            <Stack flexDirection="row" justifyContent="inherit">
              <Heading as="h3" fontSize={["sm", "md", "lg", "xl"]} data-testid={`title-${id}`}>
                {title}
              </Heading>
              <Text pl={24} fontWeight="bold" as="span" color="#E28A5A" data-testid={`price-${id}`}>{priceFormatter(price)}</Text>
            </Stack>
            <Text fontSize="sm" width="350px" data-testid={`description-${id}`}>
              {description}
            </Text>
          </Stack>

          <Flex data-testid="quantity" justifyContent="space-between">
            <Flex alignItems="center" pr={12} >Quantity: </Flex>
            <Box display="flex">
              <Button p="0" onClick={(e) => onClickHandler(e, id, +1)} data-testid={`increase-quantity-btn-${id}`}>
                <Icon name="triangle-up" size="20px" />
              </Button>
              <Flex alignItems="center" px="3" data-testid={`product-quantity-${id}`}>{quantity}</Flex>

              <Button p="0" disabled={quantity === 0} data-testid={`decrease-quantity-btn-${id}`} onClick={(e) => onClickHandler(e, id, -1)} >
                <Icon name="triangle-down" size="20px" />
              </Button>
            </Box>
          </Flex>
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
