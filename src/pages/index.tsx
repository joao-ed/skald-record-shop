// packages
import React from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart } from '@styled-icons/boxicons-regular'

// Components
import {
  Header,
  Flex,
  Box,
  Badge,
  IconButton,
  HeaderActions
} from '~/components'

const WISHLIST = 'Wishlist'
const MY_BAG = 'My bag'

export default function Home() {
  return (
    <>
      <Header>
        <HeaderActions />
      </Header>
      <h1>hello world</h1>
    </>
  )
}
