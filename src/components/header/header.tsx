// Packages
import React, { FC } from 'react'

// Styles
import * as S from './styles'

// Illustrations
import { Disco } from '~/illustrations'

// Components
import { Flex, Box } from '~/components'

const APPLICATION_TITLE = 'Skald Shop'

export const Header: FC = ({ children }) => (
  <S.Header>
    <Flex alignItems="center" mx="2rem">
      <Box>
        <S.ApplicationTitle>{APPLICATION_TITLE}</S.ApplicationTitle>
      </Box>
      <S.IllustrationContainer>
        <Disco />
      </S.IllustrationContainer>
    </Flex>
    {children}
  </S.Header>
)
