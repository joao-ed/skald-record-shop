// packages
import React from 'react'

// HOCs
import { withNavigation } from '~/hocs'

function Home() {
  return <h1 style={{ color: 'black' }}>Homepage</h1>
}

export default withNavigation(Home)
