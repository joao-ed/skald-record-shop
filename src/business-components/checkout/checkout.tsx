// Packages
import React, { FC } from 'react'
import * as R from 'ramda'
import { createStore, useStateMachine } from 'little-state-machine'

// Components
import { OrderResume, Stack, Grid } from '~/components'

// Partials
import { PersonalInfo, AddressInfo, PaymentInfo } from './partials'

// State
import { reset, updateAction } from './state'

// Types
import { UiContentEnum, StoreProps } from './types'

// Hooks
import { useProductContext } from '~/hooks'

createStore<StoreProps>({
  data: {
    name: '',
    id: '',
    phone: '',
    zipcode: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    owner: '',
    cvv: '',
    cardNumber: '',
    expDate: ''
  },
  section: UiContentEnum.PERSONAL_INFO
})

interface CheckoutProps {
  orderAmount: number
  toggleCheckout: () => void
  toggleFullScreen: () => void
}

export const Checkout: FC<CheckoutProps> = ({
  orderAmount,
  toggleCheckout,
  toggleFullScreen
}) => {
  const { state, actions } = useStateMachine<StoreProps>({
    reset,
    updateAction
  })

  const { section } = state

  const { bag } = useProductContext()

  const onSuccess = () =>
    R.compose(
      () => toggleFullScreen(),
      () => bag?.actions.clear(),
      () => actions.reset({})
    )()

  const uiContent: Record<UiContentEnum, React.ReactNode> = {
    0: <PersonalInfo toggleCheckout={toggleCheckout} />,
    1: <AddressInfo />,
    2: <PaymentInfo onSuccess={onSuccess} />
  }

  return (
    <Grid min="30ch" gutter="4rem">
      <Stack space="4rem">{uiContent[section]}</Stack>
      <OrderResume total={orderAmount} />
    </Grid>
  )
}
