// Packages
import styled from 'styled-components'
import { Card as RebassCard } from 'rebass/styled-components'
import { ifProp, theme } from 'styled-tools'
import { CardProps as RebassCardProps } from 'rebass'

export type CardProps = RebassCardProps

export const Card = styled(RebassCard)<{ shadow?: boolean }>`
  box-shadow: ${ifProp('shadow', theme('shadows.card'))};
`
