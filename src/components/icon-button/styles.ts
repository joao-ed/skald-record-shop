// Packages
import styled, { css } from 'styled-components'
import { Button as RebassButton } from 'rebass'

// Styles
import { IconButtonProps } from './icon-button'

export const Button = styled(RebassButton)<IconButtonProps>`
  ${({ theme }) => css`
    padding: 0;
    border: none;
    font: inherit;
    text-transform: uppercase;
    color: ${theme.colors.white};
    background-color: transparent;
    &:hover,
    &:focus {
      cursor: pointer;
      transform: translateY(-0.25em);
    }
  `}
`
