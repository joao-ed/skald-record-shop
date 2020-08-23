// Pacakges
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import centered from '@storybook/addon-centered/react'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from '../src/styles'

const themes = [theme]

const withGlobal = (cb) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {cb()}
  </ThemeProvider>
)

addDecorator(withGlobal)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
