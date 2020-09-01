// packages
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'

// styles
import { GlobalStyle, theme } from '../styles'

// HOCs
import { withProductProvider } from '~/hocs'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Skald Shop</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default withProductProvider(MyApp)
