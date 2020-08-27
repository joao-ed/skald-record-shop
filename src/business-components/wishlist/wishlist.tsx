// Packages
import React from 'react'

// Components
import { ActionList, Text } from '~/components'
import { useProductContext } from '~/hooks'
import { Button, Flex } from 'rebass'
import { Product } from '~/types'

export const Wishlist = () => {
  const { wishlist, bag } = useProductContext()

  const listOfProducts = wishlist?.list.map((item, index) => ({
    content: (
      <Flex alignItems="center" width="100%">
        <Text fontSize="large" color="black" padding="2rem">
          {item.title}
        </Text>
        <Button
          backgroundColor="blue"
          onClick={() => bag?.actions.insertAt(0, { ...item, quantity: 1 })}
        >
          ADD TO BAG
        </Button>
        <Button
          backgroundColor="red"
          onClick={() => wishlist.actions.removeAt(index)}
        >
          REMOVE FROM WISHLIST
        </Button>
      </Flex>
    )
  }))

  return listOfProducts && listOfProducts?.length > 0 ? (
    <ActionList<Product> actions={listOfProducts} />
  ) : (
    <h1>Não há itens</h1>
  )
}
