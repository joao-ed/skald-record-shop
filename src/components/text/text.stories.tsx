import React from 'react'
import { Text } from '.'

export default {
  title: 'Components/Text'
}

export const Primary = () => <Text color="primary">Hello</Text>
export const Uppercase = () => (
  <Text color="primary" uppercase>
    Hello
  </Text>
)
