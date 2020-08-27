// Packages
import React from 'react'
import { ProductContext } from '~/contexts'
import { NextPage } from 'next'

export const withProductProvider = (Page: NextPage<any>) => {
  function WrappedPage(props: any) {
    return (
      <ProductContext>
        <Page {...props} />
      </ProductContext>
    )
  }

  WrappedPage.displayName = `withProductProvider(${Page.displayName})`

  return WrappedPage
}
