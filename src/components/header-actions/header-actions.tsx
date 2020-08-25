// packages
import React from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart, Menu } from '@styled-icons/boxicons-regular'

// Components
import { Flex, Box, Badge, IconButton } from '~/components'

import * as S from './styles'

const WISHLIST = 'Wishlist'
const MY_BAG = 'My bag'

export const HeaderActions = () => (
  <Flex>
    <S.Toolbar>
      <Box px="2rem">
        <Badge content={3}>
          <IconButton icon={<Heart width={30} />} caption={WISHLIST} />
        </Badge>
      </Box>
      <Box px="4rem">
        <Badge content={2}>
          <IconButton icon={<ShoppingBag width={30} />} caption={MY_BAG} />
        </Badge>
      </Box>
    </S.Toolbar>
    <S.Menu className="list-action-buttons">
      <IconButton icon={<Menu width={30} />} />
    </S.Menu>
  </Flex>
)
