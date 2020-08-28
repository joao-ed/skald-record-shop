import styled, { css } from 'styled-components'
import { Button } from 'rebass/styled-components'
import { theme, switchProp, ifProp, ifNotProp } from 'styled-tools'

import { ButtonProps } from './button'

export const StyledButton = styled(Button)<ButtonProps>`
  font-size: ${theme('font.sizes.small')};
  font-weight: normal;
  padding: ${theme('spacings.xxsmall')} ${theme('space.large')};
  transition: background-color 0.25s ease-in, box-shadow 0.25s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${ifProp(
    'disabled',
    switchProp('variant', {
      primary: theme('colors.gray'),
      secondary: 'transparent'
    }),
    ifProp(
      'destructive',
      switchProp('variant', {
        primary: theme('colors.red'),
        secondary: 'transparent'
      }),
      switchProp('variant', {
        primary: theme('colors.primary'),
        secondary: 'transparent'
      })
    )
  )};

  color: ${ifProp(
    'disabled',
    switchProp('variant', {
      primary: css`
        ${theme('colors.white')}
      `,
      secondary: css`
        ${theme('colors.gray')}
      `
    }),
    ifProp(
      'destructive',
      switchProp('variant', {
        primary: css`
          ${theme('colors.white')}
        `,
        secondary: css`
          ${theme('colors.red')}
        `
      }),
      switchProp('variant', {
        primary: css`
          ${theme('colors.white')}
        `,
        secondary: css`
          ${theme('colors.primary')}
        `
      })
    )
  )};

  border: ${ifProp(
    'disabled',
    switchProp('variant', {
      secondary: css`
        1px solid ${theme('colors.lightGray')}
      `,
      primary: css`
      1px solid ${theme('colors.gray')}
    `
    }),

    ifProp(
      'destructive',
      switchProp('variant', {
        secondary: css`
          1px solid ${theme('colors.red')}
        `,
        primary: css`
        1px solid ${theme('colors.red')}
      `
      }),
      switchProp('variant', {
        secondary: css`
          1px solid ${theme('colors.primary')}
        `,
        primary: css`
          1px solid ${theme('colors.primary')}
        `
      })
    )
  )};

  &:hover {
    cursor: ${ifNotProp('disabled', 'pointer')};
  }

  &:focus {
    box-shadow: inset 0 0 4rem
      ${ifProp('destructive', theme('colors.red'), theme('colors.primary'))};
  }
`
