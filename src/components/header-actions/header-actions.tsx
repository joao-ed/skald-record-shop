// packages
import React, { FC, useState } from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart, Menu } from '@styled-icons/boxicons-regular'

import { useToggle } from 'react-use'
import { Text } from 'rebass'

// Components
import {
  Flex,
  IconButton,
  Box,
  ActionList,
  Badge,
  FullscreenModal
} from '~/components'

// Business Components
import { Wishlist, Bag } from '~/business-components'

// Styles
import * as S from './styles'

// Hooks
import { useProductContext } from '~/hooks'

const WISHLIST = 'Wishlist'
const MY_BAG = 'My bag'

export type ActionsType = 'wishlist' | 'bag' | 'all'

export const HeaderActions: FC = () => {
  const [action, setAction] = useState<ActionsType>()
  const [open, toggleModal] = useToggle(false)
  const { bag, wishlist } = useProductContext()

  // DESKTOP
  const callToAction = (type?: ActionsType) => {
    const actions: Record<ActionsType, () => void> = {
      wishlist: () => setAction('wishlist'),
      bag: () => setAction('bag'),
      all: () => setAction('all')
    }
    toggleModal(true)
    type && actions[type]()
  }

  // MOBILE
  const actions = [
    {
      icon: (
        <Badge content={bag?.list.length}>
          <ShoppingBag width={30} color="black" />
        </Badge>
      ),
      content: (
        <Text fontSize="large" color="black" padding="2rem">
          MY BAG
        </Text>
      ),
      contentData: 'bag' as ActionsType
    },
    {
      icon: (
        <Badge content={wishlist?.list.length}>
          <Heart width={30} color="black" />
        </Badge>
      ),
      content: (
        <Text fontSize="large" color="black" padding="2rem">
          WISHLIST
        </Text>
      ),
      contentData: 'wishlist' as ActionsType
    }
  ]

  const fullscreenContent: Record<ActionsType, React.ReactNode> = {
    wishlist: <Wishlist />,
    bag: <Bag toggleModal={toggleModal} />,
    all: (
      <ActionList<ActionsType>
        onClickCallback={callToAction}
        actions={actions}
      />
    )
  }

  return (
    <Flex>
      <S.Toolbar>
        <Box px="2rem">
          <Badge content={wishlist?.list.length}>
            <IconButton
              icon={<Heart width={30} />}
              caption={WISHLIST}
              onClick={() => callToAction('wishlist')}
            />
          </Badge>
        </Box>
        <Box px="4rem">
          <Badge content={bag?.list.length}>
            <IconButton
              icon={<ShoppingBag width={30} />}
              caption={MY_BAG}
              onClick={() => callToAction('bag')}
            />
          </Badge>
        </Box>
      </S.Toolbar>
      <S.Menu className="list-action-buttons">
        <IconButton
          icon={<Menu width={30} />}
          onClick={() => callToAction('all')}
        />
      </S.Menu>
      <FullscreenModal open={open} toggleModal={toggleModal}>
        <Box paddingTop="1rem">{fullscreenContent[action as ActionsType]}</Box>
      </FullscreenModal>
    </Flex>
  )
}
