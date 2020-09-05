// Packages
import React, { FC } from 'react'
import { For, Choose } from 'react-extras'
import { IconButton } from '../icon-button'
import { HeartCircle } from '@styled-icons/boxicons-regular'
import { HeartCircle as EmptyHeartCircle } from '@styled-icons/boxicons-solid'

// Components
import { Flex, Button, Grid, ProductCard } from '~/components'

// Hooks
import { useProductContext } from '~/hooks'

const BUY = 'BUY'

export const ProductList: FC = () => {
  const { products, bag, wishlist } = useProductContext()

  const onWishilist = (prodId: string) =>
    wishlist?.list.find(({ id }) => id === prodId)

  return (
    <Grid min="30ch" gutter="1rem">
      <For
        of={products?.list || []}
        render={(product) => (
          <ProductCard
            key={product.id}
            topbar={
              <IconButton
                icon={
                  <Choose>
                    <Choose.When
                      condition={Boolean(onWishilist(product.id))}
                      render={() => <EmptyHeartCircle width={30} color="red" />}
                    />
                    <Choose.Otherwise
                      render={() => <HeartCircle width={30} color="red" />}
                    />
                  </Choose>
                }
                onClick={() => wishlist?.actions.insertAt(0, product)}
              />
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
