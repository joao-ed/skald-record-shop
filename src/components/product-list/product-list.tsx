// Packages
import React, { FC } from 'react'

import { For } from 'react-extras'
import { ProductCard } from '../product-card'
import { Flex } from '../flex'
import { Button } from 'rebass'
import { IconButton } from '../icon-button'
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle'
import { Grid } from '../grid'
import { useProductContext } from '~/hooks'

export const ProductList: FC = () => {
  const { products = [], bag, wishlist } = useProductContext()

  return (
    <Grid min="30ch" gutter="1rem">
      <For
        of={products}
        render={(product) => (
          <ProductCard
            topbar={
              <div>
                <IconButton
                  icon={<HeartCircle width={30} color="red" />}
                  onClick={() => wishlist?.actions.insertAt(0, product)}
                />
              </div>
            }
            toolbar={
              <Flex justifyContent="flex-end">
                <Button
                  backgroundColor="#3D71FA"
                  onClick={() =>
                    bag?.actions.insertAt(0, { ...product, quantity: 1 })
                  }
                >
                  BUY
                </Button>
              </Flex>
            }
            product={product}
          />
        )}
      />
    </Grid>
  )
}
