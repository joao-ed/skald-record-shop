// Packages
import React, { FC } from 'react'

// Styles
import * as S from './styles'

const APPLICATION_TITLE = 'Skald Shop'

export const Header: FC = ({ children }) => (
  <S.Header>
    <S.ApplicationTitle>{APPLICATION_TITLE}</S.ApplicationTitle>
    {children}
  </S.Header>
)
