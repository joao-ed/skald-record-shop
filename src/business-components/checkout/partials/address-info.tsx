// Packages
import React, { FC } from 'react'
import { useStateMachine } from 'little-state-machine'
import cepPromise from 'cep-promise'
import { useToggle } from 'react-use'
import { useForm } from 'react-hook-form'
import { Input } from '@rebass/forms'

// State
import { updateAction } from '../state'

// Components
import { Grid } from '~/components'
import { Toolbar } from './toolbar'

// Types
import { CheckoutFormProps, StoreProps, UiContentEnum } from '../types'

type AddressInfoForm = Pick<
  CheckoutFormProps,
  'zipcode' | 'neighborhood' | 'street' | 'city' | 'state'
>

export const AddressInfo: FC = () => {
  const { handleSubmit, register, setValue, getValues } = useForm<
    AddressInfoForm
  >()

  const { state, action } = useStateMachine<StoreProps>(updateAction)
  const [loading, toggleLoading] = useToggle(false)

  const onSubmit = (data: AddressInfoForm) => {
    try {
      action({ data, section: UiContentEnum.PAYMENT_INFO })
    } catch (error) {
      console.error(error)
    }
  }

  const prevCallback = () => {
    try {
      action({ data: getValues(), section: UiContentEnum.PERSONAL_INFO })
    } catch (error) {
      console.error(error)
    }
  }

  function fetchCEP(cep: string) {
    toggleLoading()
    cepPromise(cep)
      .then(({ city, neighborhood, state, street }) => {
        setValue('city', city)
        setValue('neighborhood', neighborhood)
        setValue('state', state)
        setValue('street', street)
        toggleLoading()
      })
      .catch(() => {
        toggleLoading()
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid min="30ch" gutter="5.5rem">
        <Input
          name="zipcode"
          placeholder="zipcode"
          ref={register}
          defaultValue={state.data.zipcode}
          onBlur={(e) => {
            if (e.target.value !== '') fetchCEP(e.target.value)
          }}
        />
        <Input
          name="street"
          disabled={loading}
          placeholder="street"
          defaultValue={state.data.street}
          ref={register}
        />
        <Input
          name="neighborhood"
          disabled={loading}
          placeholder="neighborhood"
          defaultValue={state.data.neighborhood}
          ref={register}
        />
        <Input
          name="city"
          disabled={loading}
          placeholder="city"
          defaultValue={state.data.city}
          ref={register}
        />
        <Input
          name="state"
          disabled={loading}
          placeholder="state"
          defaultValue={state.data.state}
          ref={register}
        />
      </Grid>
      <Toolbar prev={prevCallback} isFirstStep={false} isLastStep={false} />
    </form>
  )
}
