// Packages
import React, { FC, PropsWithChildren } from 'react'

// Components
import { Box, Flex } from '~/components'

// Styles
import * as S from './styles'

interface ActionItemProps {
  icon?: React.ReactNode
}

export const ActionItem: FC<PropsWithChildren<ActionItemProps>> = ({
  icon,
  children
}) => (
  <S.ItemWrapper>
    <Flex alignItems="center">
      <Box mr="2rem">{icon}</Box>
      <Box width="100%">{children}</Box>
    </Flex>
  </S.ItemWrapper>
)
