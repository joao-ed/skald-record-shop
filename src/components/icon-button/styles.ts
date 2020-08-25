// Packages
import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 0;
    border: none;
    font: inherit;
    color: ${theme.colors.white};
    background-color: transparent;
    &:hover,
    &:focus {
      cursor: pointer;
      transform: translateY(-0.25em);
    }
  `}
`
