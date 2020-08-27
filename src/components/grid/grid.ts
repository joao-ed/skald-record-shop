// Packages
import styled from 'styled-components'
import { prop } from 'styled-tools'
import * as CSS from 'csstype'

export interface GridProps {
  gutter: CSS.GridGapProperty<string>
  min: CSS.MaxWidthProperty<string>
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${prop('gutter')};

  @supports (width: min(${prop('min')}, 100%)) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(${prop('min')}, 100%), 1fr)
    );
  }
`
