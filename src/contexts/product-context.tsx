// Packages
import React, { FC, useEffect } from 'react'
import Axios from 'axios'
import { ListActions } from 'react-use/lib/useList'
import { useList } from 'react-use'
import * as R from 'ramda'

// Types
import { Product } from '~/types'

export interface BagProps extends Product {
  quantity: number
}

export interface ProductContextProps {
  products?: { list: Product[]; actions: ListActions<Product> }
  wishlist?: { list: Product[]; actions: ListActions<Product> }
  bag?: {
    list: BagProps[]
    actions: ListActions<BagProps> & {
      addToBag(item: Product, itemQuantity?: number): void
    }
  }
}

export const Context = React.createContext<ProductContextProps | undefined>(
  undefined
)

function actionFactory<T>(
  type: 'wishlist' | 'bag',
  actions: ListActions<T>,
  list: T[]
) {
  const actionProxy: Record<typeof type, ListActions<T>> = {
    wishlist: {
      ...actions,
      insertAt: function (index, item) {
        if (list.indexOf(item) < 0) actions.insertAt(index, item)
      }
    },
    bag: actions
  }
  return actionProxy[type]
}

export const ProductContext: FC = ({ children }) => {
  const [products, productsActions] = useList<Product>()
  const [wishlist, wishlistActions] = useList<Product>()
  const [bag, bagActions] = useList<BagProps>()

  const addToBag = (newItem: Product, itemQuantity?: number) =>
    R.tryCatch(
      R.compose(
        () => wishlistActions.filter(({ id }) => id !== newItem.id),
        (x) => {
          if (R.not(x)) bagActions.insertAt(0, { ...newItem, quantity: 1 })
          else {
            bagActions.update((a, b) => a.id === b.id, {
              ...newItem,
              quantity: Boolean(itemQuantity)
                ? Number(itemQuantity)
                : Number(x?.quantity) + 1
            })
          }
        },
        R.find<BagProps>(({ id }) => id === newItem.id)
      ),
      (x) => console.error(`something get wrong. Err: ${x}`)
    )(bag)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get('http:///localhost:3000/api/products')
      if (response.status === 200 && response) {
        productsActions.set(response.data)
      }
    }
    fetchData()
  }, [])

  const value = React.useMemo(
    () => ({
      products: {
        list: products,
        actions: productsActions
      },
      wishlist: {
        list: wishlist,
        actions: actionFactory<Product>('wishlist', wishlistActions, wishlist)
      },
      bag: {
        list: bag,
        actions: {
          ...bagActions,
          addToBag
        }
      }
    }),
    [products, wishlist, bag]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
