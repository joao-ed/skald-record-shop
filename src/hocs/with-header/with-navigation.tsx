// packages
import React from 'react'

// Components
import { Header, HeaderActions } from '~/components'
import { NextPage } from 'next'

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
