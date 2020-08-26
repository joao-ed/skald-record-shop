// packages
import React from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart } from '@styled-icons/boxicons-regular'
import { useRouter } from 'next/dist/client/router'

import { useToggle } from 'react-use'
import { Text } from 'rebass'

// Components
import {
  Header,
  HeaderActions,
  ActionsType,
  Box,
  ActionList,
  Badge,
  FullscreenModal
} from '~/components'

export default function Home() {
  const { push } = useRouter()
  const [open, toggleModal] = useToggle(false)

  const callToAction = (type: ActionsType) => {
    const actions: Record<ActionsType, () => void> = {
      wishlist: () => push('/wishlist'),
      bag: () => push('/bag'),
      all: () => toggleModal()
    }
    actions[type]()
  }

  const actions = [
    {
      icon: (
        <Badge content={2}>
          <ShoppingBag width={30} color="black" />
        </Badge>
      ),
      content: (
        <Text color="black" fontSize="large" padding="2rem">
          MY BAG
        </Text>
      ),
      contentData: 'bag' as ActionsType
    },
    {
      icon: (
        <Badge content={4}>
          <Heart width={30} color="black" />
        </Badge>
      ),
      content: (
        <Text color="black" fontSize="large" padding="2rem">
          WISHLIST
        </Text>
      ),
      contentData: 'wishlist' as ActionsType
    }
  ]

  return (
    <>
      <Header>
        <HeaderActions callToAction={callToAction} />
      </Header>
      <FullscreenModal open={open} toggleModal={toggleModal}>
        <Box paddingTop="1rem">
          <ActionList<ActionsType>
            onClickCallback={callToAction}
            actions={actions}
          />
        </Box>
      </FullscreenModal>
    </>
  )
}
