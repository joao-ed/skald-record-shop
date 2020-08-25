// Packages
import styled from 'styled-components'
import media from 'styled-media-query'

export const Toolbar = styled.div`
  display: none;
  ${media.greaterThan('medium')`
      display: inherit;
  `};
`
export const Menu = styled.div`
  display: inherit;
  ${media.greaterThan('medium')`
          display: none;
  `};
`
