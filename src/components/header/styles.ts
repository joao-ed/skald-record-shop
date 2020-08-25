import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    align-items: center;
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.primary};
  `}
`

export const ApplicationTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const IllustrationContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    margin-left: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      display: block;
  `};
  `}
`
