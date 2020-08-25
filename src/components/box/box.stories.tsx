import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { Flex } from '~/components'

import { Box } from '.'

export default {
  title: 'Components/Box'
}

export const Basic = () => (
  <Flex justifyContent="space-between">
    <Box backgroundColor="primary" width={300} height={300} />
    <Box backgroundColor="secondary" width={300} height={300} />
    <Box backgroundColor="primary" width={300} height={300} />
    <Box backgroundColor="secondary" width={300} height={300} />
  </Flex>
)
