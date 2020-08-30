// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'
import * as CSS from 'csstype'

export interface StackProps {
  space: CSS.PaddingProperty<1>
}

export interface StackSplitProps {
  space?: CSS.PaddingProperty<1>
}

export const Stack = styled.div<StackProps>`
  & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: ${prop('space')};
  }
`
export const StackSplit = styled.div<StackSplitProps>`
  margin-top: auto;
  padding-top: ${prop('space')};
`
