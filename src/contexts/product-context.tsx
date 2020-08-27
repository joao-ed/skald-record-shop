// Packages
import React, { FC, useEffect, useState } from 'react'
import Axios from 'axios'
import { ListActions } from 'react-use/lib/useList'

// Types
import { Product } from '~/types'
import { useList } from 'react-use'

interface BagProps extends Product {
  quantity: number
}

export interface ProductContextProps {
  products?: Product[]
  wishlist?: { list: Product[]; actions: ListActions<Product> }
  bag?: { list: BagProps[]; actions: ListActions<BagProps> }
}

export const Context = React.createContext<ProductContextProps | undefined>(
  undefined
)

export const ProductContext: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>()
  const [wishlist, wishlistActions] = useList<Product>()
  const [bag, bagActions] = useList<BagProps>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get('http:///localhost:3000/api/products')
      if (response.status === 200 && response) {
        setProducts(response.data)
      }
    }
    fetchData()
  }, [])

  const value = React.useMemo(
    () => ({
      products,
      wishlist: {
        list: wishlist,
        actions: { ...wishlistActions }
      },
      bag: {
        list: bag,
        actions: { ...bagActions }
      }
    }),
    [products, wishlist, bag]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
