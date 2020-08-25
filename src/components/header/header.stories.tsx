// Packages
import React from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart } from '@styled-icons/boxicons-regular'

// Components
import { IconButton, Header, Badge, Flex, Box } from '~/components'

export default {
  title: 'Components/Header'
}
export const Standard = () => (
  <Header>
    <Flex justifyContent="flex-end">
      <Box px="2rem">
        <Badge content={3}>
          <IconButton icon={<Heart width={30} />} caption={'Wishlist'} />
        </Badge>
      </Box>
      <Box px="4rem">
        <Badge content={2}>
          <IconButton icon={<ShoppingBag width={30} />} caption={'My bag'} />
        </Badge>
      </Box>
    </Flex>
  </Header>
)
