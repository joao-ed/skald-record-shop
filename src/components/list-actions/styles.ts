import styled from 'styled-components'
import { Card } from 'rebass'
import { theme } from 'styled-tools'

export const ItemWrapper = styled(Card)`
  background-color: ${theme('colors.white')};
  -webkit-box-shadow: 7px 11px 34px -16px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 7px 11px 34px -16px rgba(0, 0, 0, 0.56);
  box-shadow: 7px 11px 34px -16px rgba(0, 0, 0, 0.56);
  &:hover,
  &:focus {
    background-color: ${theme('colors.lightGray')};
    cursor: pointer;
  }
`
