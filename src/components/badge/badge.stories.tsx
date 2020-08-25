// Pakcages
import React from 'react'

// Components
import { Badge } from './badge'

// Mock props
import { mockProps } from './mock-props'

export default {
  title: 'Components/Badge'
}

export const WithContent = () => (
  <Badge {...mockProps.content}>
    <button>Menu</button>
  </Badge>
)
export const NoContent = () => (
  <Badge {...mockProps.zero}>
    <button>Menu</button>
  </Badge>
)
