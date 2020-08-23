import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.primary};
  `}
`

export const ApplicationTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
