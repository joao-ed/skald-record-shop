// Packages
import styled, { css } from 'styled-components'
import { Text } from '../text'

// Theme
import { theme, ifProp, prop } from 'styled-tools'

export const Label = styled(Text)`
  color: ${ifProp(
    'labelColor',
    theme(`colors.${prop('labelColor')}`),
    css`
      ${theme('colors.gray')}
    `
  )};
  font-size: ${ifProp(
    'fontSize',
    theme(`font.sizes.${prop('fontSize')}`),
    css`
      ${theme('font.sizes.medium')}
    `
  )};
`

export const Image = styled.img<{ leased?: boolean; imageWidth?: string }>`
  max-width: ${ifProp('imageWidth', prop('imageWidth'), '100%')};
  border-radius: ${ifProp('leased', '50%', '0')};
`

export const Value = styled(Text)`
  color: ${ifProp(
    'color',
    theme(`colors.${prop('color')}`),
    css`
      ${theme('colors.black')}
    `
  )};
  font-size: ${ifProp(
    'fontSize',
    prop('fontSize'),
    css`
      ${theme('font.sizes.medium')}
    `
  )};
  font-weight: ${ifProp('weight', prop('weight'))};
  overflow-wrap: break-word;
`
