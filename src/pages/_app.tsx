// packages
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

// styles
import { GlobalStyle, theme } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
