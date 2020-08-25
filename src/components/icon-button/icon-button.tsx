// Packages
import React, { FC } from 'react'

// Components
import { Flex } from '~/components'

// Styles
import * as S from './styles'

export interface IconButtonProps {
  icon: React.ReactNode
  caption?: string
}

export const IconButton: FC<IconButtonProps> = ({ icon, caption }) => (
  <S.Button>
    <Flex flexDirection="column" alignItems="center">
      {icon}
      <h6>{caption}</h6>
    </Flex>
  </S.Button>
)
