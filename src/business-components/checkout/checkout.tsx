// Packages
import React, { FC, useCallback } from 'react'
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
  const { state, actions } = useStateMachine({
    reset,
    updateAction
  })

  const { section } = state

  const { bag } = useProductContext()

  const onSuccess = useCallback(
    () =>
      R.compose(
        () => toggleFullScreen(),
        () => bag?.actions.clear(),
        () => actions.reset({})
      )(),
    [toggleFullScreen, bag, actions]
  )

  const uiContent = useCallback(
    (): Record<UiContentEnum, React.ReactNode> => ({
      0: <PersonalInfo toggleCheckout={toggleCheckout} />,
      1: <AddressInfo />,
      2: <PaymentInfo onSuccess={onSuccess} />
    }),
    [onSuccess, toggleCheckout]
  )()

  return (
    <Grid min="30ch" gutter="4rem">
      <Stack space="4rem">{uiContent[(section as UiContentEnum) || 0]}</Stack>
      <OrderResume total={orderAmount} />
    </Grid>
  )
}
