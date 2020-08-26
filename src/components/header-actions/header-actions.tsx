// packages
import React, { FC } from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Heart, Menu } from '@styled-icons/boxicons-regular'
import { useRouter } from 'next/dist/client/router'
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

// Styles
import * as S from './styles'

// Constants
import { WISHLIST_PATH, BAG_PATH } from '~/routes'

const WISHLIST = 'Wishlist'
const MY_BAG = 'My bag'

export type ActionsType = 'wishlist' | 'bag' | 'all'

export const HeaderActions: FC = () => {
  const { push } = useRouter()
  const [open, toggleModal] = useToggle(false)

  // DESKTOP
  const callToAction = (type: ActionsType) => {
    const actions: Record<ActionsType, () => void> = {
      wishlist: () => push(WISHLIST_PATH),
      bag: () => push(BAG_PATH),
      all: () => toggleModal()
    }
    actions[type]()
  }

  // MOBILE
  const actions = [
    {
      icon: (
        <Badge content={2}>
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
        <Badge content={4}>
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

  return (
    <Flex>
      <S.Toolbar>
        <Box px="2rem">
          <Badge content={3}>
            <IconButton
              icon={<Heart width={30} />}
              caption={WISHLIST}
              onClick={() => callToAction('wishlist')}
            />
          </Badge>
        </Box>
        <Box px="4rem">
          <Badge content={2}>
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
        <Box paddingTop="1rem">
          <ActionList<ActionsType>
            onClickCallback={callToAction}
            actions={actions}
          />
        </Box>
      </FullscreenModal>
    </Flex>
  )
}
