// Packages
import React from 'react'

// Components
import { ProductCard } from './product-card'
import { Product } from '~/types'
import { Button } from 'rebass'

export default {
  title: 'Components/ProductCard'
}

const prod: Product = {
  id: '1',
  title: 'Led Zeppelin IV',
  price: 2000,
  image: '/images/empty-bag.svg'
}

export const Standard = () => (
  <ProductCard
    topbar={
      <div>
        <button>wishList</button>
      </div>
    }
    toolbar={
      <div>
        <Button>Buy!!!</Button>
      </div>
    }
    product={prod}
  />
)
