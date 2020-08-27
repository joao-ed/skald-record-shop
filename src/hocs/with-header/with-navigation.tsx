// packages
import React from 'react'
import { NextPage } from 'next'

// Components
import { Header, HeaderActions } from '~/components'

export function withNavigation(Page: NextPage<any>) {
  function WrappedPage(props: any) {
    return (
      <>
        <Header>
          <HeaderActions />
        </Header>
        <Page {...props} />
      </>
    )
  }

  WrappedPage.displayName = `withNavigation(${Page.displayName})`

  return WrappedPage
}
