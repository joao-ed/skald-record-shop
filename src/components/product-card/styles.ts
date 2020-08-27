// Packages
import styled from 'styled-components'

// Components
import { Card } from '~/components'
import { theme } from 'styled-tools'

export const Container = styled(Card)`
  max-width: 300px;
  min-height: 300px;
  padding: ${theme('spacings.small')};
  border: 2px solid ${theme('colors.lightGray')};
`
