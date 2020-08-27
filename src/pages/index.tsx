// packages
import React from 'react'
import { ProductCard, Container, IconButton, Flex } from '~/components'
import { Product } from '~/types'
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle'

// HOCs
import { withNavigation } from '~/hocs'
import { Button } from 'rebass'

const prod: Product = {
  id: '1',
  title: 'Led Zeppelin IV',
  price: 2000,
  image: '/images/empty-bag.svg'
}

function Home() {
  return (
    <Container>
      <h1 style={{ color: 'black' }}>Homepage</h1>
      <ProductCard
        topbar={
          <div>
            <IconButton icon={<HeartCircle width={30} color={'red'} />} />
          </div>
        }
        toolbar={
          <Flex justifyContent="flex-end">
            <Button backgroundColor="#3D71FA">BUY</Button>
          </Flex>
        }
        product={prod}
      />
    </Container>
  )
}

export default withNavigation(Home)
