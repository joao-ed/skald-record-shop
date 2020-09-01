// Packages
import React, { FC } from 'react'
import { For } from 'react-extras'
import { IconButton } from '../icon-button'
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle'

// Components
import { Flex, Button, Grid, ProductCard } from '~/components'

// Hooks
import { useProductContext } from '~/hooks'

const BUY = 'BUY'

export const ProductList: FC = () => {
  const { products, bag, wishlist } = useProductContext()

  return (
    <Grid min="30ch" gutter="1rem">
      <For
        of={products?.list || []}
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
                  variant="primary"
                  onClick={() => bag?.actions.addToBag(product)}
                >
                  {BUY}
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
