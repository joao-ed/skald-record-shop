// Packages
import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${theme('colors.orange')};
  font-size: ${theme('font.sizes.xxsmall')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme('colors.white')};
  font-weight: bolder;
  position: absolute;
  bottom: 30px;
  right: -5px;
`
