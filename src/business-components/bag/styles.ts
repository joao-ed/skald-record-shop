import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  padding: 2rem;

  ${media.greaterThan('medium')`
   flex-flow: row wrap;
   align-items: center;
`};
`

export const WrapperText = styled.div`
  width: 100%;
  ${media.greaterThan('medium')`
    width: 25%;
  `};
`
