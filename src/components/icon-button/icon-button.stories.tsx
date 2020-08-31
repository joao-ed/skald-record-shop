// Packages
import React from 'react'

// Components
import { IconButton } from './icon-button'
import { ShoppingBag } from '@styled-icons/heroicons-outline'

export default {
  title: 'Components/IconButton'
}

export const Empty = () => (
  <IconButton icon={<ShoppingBag width={30} color="black" />} />
)
