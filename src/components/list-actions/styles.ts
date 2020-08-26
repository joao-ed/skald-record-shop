import styled from 'styled-components'
import { Card } from 'rebass'
import { theme } from 'styled-tools'

export const ItemWrapper = styled(Card)`
  background-color: ${theme('colors.lightGray')};
  &:hover,
  &:focus {
    background-color: ${theme('colors.primaryHover')};
    cursor: pointer;
  }
  & > * {
    color: ${theme('colors.white')};
  }
`
