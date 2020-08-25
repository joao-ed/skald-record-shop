import React from 'react'
import { Flex } from './flex'

export default {
  title: 'Components/Flex'
}

export const BasicSpaceBetween = () => (
  <Flex justifyContent="space-between">
    <div style={{ border: '2px solid peru', color: 'dimgrey' }}>Child 1</div>
    <div style={{ border: '2px solid peru', color: 'dimgrey' }}>Child 2</div>
  </Flex>
)
