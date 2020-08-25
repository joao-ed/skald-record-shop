// Packages
import React, { PropsWithChildren } from 'react'

// Styles
import * as S from './styles'

export interface BadgeProps {
  content: number
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  content
}: PropsWithChildren<BadgeProps>) => {
  return (
    <S.Wrapper>
      {children}
      {content > 0 && <S.Circle data-testid="content">{content}</S.Circle>}
    </S.Wrapper>
  )
}
