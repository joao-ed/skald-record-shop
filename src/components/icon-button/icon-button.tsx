// Packages
import React, { FC } from 'react'

// Components
import { Flex } from '~/components'

// Styles
import * as S from './styles'
import { ButtonProps } from 'rebass'

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode
  caption?: string
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  caption,
  ...props
}) => (
  <S.Button {...props}>
    <Flex flexDirection="column" alignItems="center">
      {icon}
      <h6>{caption}</h6>
    </Flex>
  </S.Button>
)
