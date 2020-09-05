// Packages
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Input } from '@rebass/forms'

// State
import { updateAction } from '../state'

// Components
import { Grid } from '~/components'

// Types
import { CheckoutFormProps, UiContentEnum, StoreProps } from '../types'

// Toolbar
import { Toolbar } from './toolbar'

interface PaymentInfoProps {
  onSuccess(): void
}

type PaymentInfoForm = Pick<
  CheckoutFormProps,
  'owner' | 'cvv' | 'cardNumber' | 'expDate'
>

export const PaymentInfo: FC<PaymentInfoProps> = ({ onSuccess }) => {
  const { register, handleSubmit, getValues } = useForm<PaymentInfoForm>()
  const { state, action } = useStateMachine<StoreProps>(updateAction)

  const onSubmit = (data: PaymentInfoForm) => {
    try {
      action({ data, section: UiContentEnum.PAYMENT_INFO })
      onSuccess()
    } catch (error) {
      console.error(error)
    }
  }

  const prev = () => {
    try {
      action({ data: getValues(), section: UiContentEnum.ADDRESS_INFO })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid min="30ch" gutter="5.5rem">
        <Input
          placeholder="Owner"
          name="owner"
          ref={register}
          defaultValue={state.data.owner}
        />
        <Input
          placeholder="CVV"
          name="cvv"
          ref={register}
          defaultValue={state.data.cvv}
        />
        <Input
          placeholder="Card number"
          name="cardNumber"
          ref={register}
          defaultValue={state.data.cardNumber}
        />
        <Input
          placeholder="Expiration date ex(03/21)"
          name="expDate"
          defaultValue={state.data.expDate}
          ref={register}
        />
      </Grid>
      <Toolbar prev={prev} isFirstStep={false} isLastStep />
    </form>
  )
}
