// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '~/styles'

export const withThemeProvider = (component: React.ReactElement) => (
  <ThemeProvider theme={theme}>{component} </ThemeProvider>
)
