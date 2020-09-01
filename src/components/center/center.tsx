// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'
import * as CSS from 'csstype'

interface CenterProps {
  gutter?: string
  maxWidth?: CSS.MaxWidthProperty<string>
}

export const Center = styled.div<CenterProps>`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${prop('maxWidth')};
  padding-left: ${prop('gutter')};
  padding-right: ${prop('gutter')};
`
