// packages
import React from 'react'
import { Container } from '~/components'
import * as R from 'ramda'

// HOCs
import { withNavigation } from '~/hocs'

// Components
import { ProductList } from '~/components'

import { withProductProvider } from '~/hocs'

function Home() {
  return (
    <Container>
      <h2 style={{ color: 'black', marginBottom: '2rem' }}>
        Our most adorable LPs waiting for you :)
      </h2>
      <ProductList />
    </Container>
  )
}

export default R.compose(withProductProvider, withNavigation)(Home)
