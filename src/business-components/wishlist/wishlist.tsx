// Packages
import React, { FC } from 'react'
import { ShoppingBag } from '@styled-icons/heroicons-outline'
import { Close } from '@styled-icons/evaicons-solid'
import { Choose } from 'react-extras'

// Components
import { ActionList, Text, Button, Flex, Box } from '~/components'

// Hooks
import { useProductContext } from '~/hooks'

// Types
import { Product } from '~/types'

// Helpers
import { stringFormat } from '~/helpers'

const ADD_TO_BAG = 'ADD TO BAG'
const REMOVE = 'REMOVE'

interface EntryItemProps {
  index: number
  item: Product
  addBagCallback?: (item: Product) => void
  removeWishlistCallback: (index: number) => void
}

const EntryItem: FC<EntryItemProps> = ({
  index,
  item,
  addBagCallback,
  removeWishlistCallback
}) => (
  <Flex alignItems="center" justifyContent="space-between" width="100%">
    <Box width={1 / 2}>
      <Text fontSize="large" color="black" padding="2rem">
        {`${item.title} - ${stringFormat.currency(item.price)}`}
      </Text>
    </Box>
    <Box width={1 / 2}>
      <Flex padding="2rem" justifyContent="flex-end">
        <Button
          variant="primary"
          onClick={() => addBagCallback && addBagCallback(item)}
          mr="2rem"
          icon={<ShoppingBag width={20} />}
        >
          {ADD_TO_BAG}
        </Button>
        <Button
          destructive
          variant="secondary"
          icon={<Close width={20} />}
          onClick={() => removeWishlistCallback(index)}
        >
          {REMOVE}
        </Button>
      </Flex>
    </Box>
  </Flex>
)

export const Wishlist = () => {
  const { wishlist, bag } = useProductContext()

  const removeFromWishlist = (index: number) =>
    wishlist?.actions.removeAt(index)

  const listOfProducts = wishlist?.list.map((item, index) => ({
    content: (
      <EntryItem
        addBagCallback={bag?.actions.addToBag}
        removeWishlistCallback={removeFromWishlist}
        item={item}
        index={index}
      />
    )
  }))

  return (
    <Choose>
      <Choose.When
        condition={Boolean(listOfProducts && listOfProducts?.length > 0)}
        render={() =>
          listOfProducts && <ActionList<Product> actions={listOfProducts} />
        }
      />
      <Choose.Otherwise render={() => <h1>Your wishlist is empty :(</h1>} />
    </Choose>
  )
}
