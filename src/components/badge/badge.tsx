// Packages
import React, { PropsWithChildren } from 'react'
import { If } from 'react-extras'

// Styles
import * as S from './styles'

export interface BadgeProps {
  content?: number
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  content
}: PropsWithChildren<BadgeProps>) => {
  return (
    <S.Wrapper>
      {children}
      <If
        condition={Boolean(content && content > 0)}
        render={() => <S.Circle data-testid="content">{content}</S.Circle>}
      />
    </S.Wrapper>
  )
}
