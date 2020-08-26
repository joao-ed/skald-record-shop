// Packages
import React from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart } from '@styled-icons/boxicons-regular'

import { ActionList, Actions } from './action-list'
import { Badge } from '../badge'

export default {
  title: 'Components/ActionList'
}

const content = ['bag', 'wishlist']

const onClickCallback = (item: string) => console.log(item)

const actions: Actions<string>[] = [
  {
    icon: (
      <Badge content={2}>
        <ShoppingBag width={30} color="black" />
      </Badge>
    ),
    content: <h2 style={{ color: 'black' }}>MY BAG</h2>,
    contentData: content[0]
  },
  {
    icon: (
      <Badge content={4}>
        <Heart width={30} color="black" />
      </Badge>
    ),
    content: <h2 style={{ color: 'black' }}>WISHLIST</h2>,
    contentData: content[1]
  }
]

export const Standard = () => (
  <ActionList<string> onClickCallback={onClickCallback} actions={actions} />
)
