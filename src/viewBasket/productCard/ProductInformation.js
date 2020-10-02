import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Heading, Text } from '@chakra-ui/core'
import { priceFormatter } from '../../utils'

const ProductInformation = ({ title, id, price, description }) => {
  return (
    <>
      <Stack spacing={2} justifyContent="space-between" flexDirection="column" >
        <Stack flexDirection="row" justifyContent="inherit">
          <Heading as="h2" fontSize={["md", "md", "lg", "xl"]} data-testid={`title-${id}`}>
            {title}
          </Heading>
          {/* AA WCAG Colour */}
          <Text pl={24} fontWeight="bold" as="span" color="#a2310d" data-testid={`price-${id}`}>{priceFormatter(price)}</Text>
        </Stack>
        <Text fontSize="sm" width="350px" data-testid={`description-${id}`}>
          {description}
        </Text>
      </Stack>
    </>
  )
}

ProductInformation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export default ProductInformation
