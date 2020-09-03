// Packages
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Input } from '@rebass/forms'

// Components
import { Grid } from '~/components'
import { Toolbar } from './toolbar'

// State
import { updateAction } from '../state'

// Types
import { StoreProps, CheckoutFormProps, UiContentEnum } from '../types'

interface PersonalInfoProps {
  toggleCheckout: () => void
}

type PersonalInfoForm = Pick<CheckoutFormProps, 'name' | 'id' | 'phone'>

export const PersonalInfo: FC<PersonalInfoProps> = ({ toggleCheckout }) => {
  const { register, handleSubmit } = useForm<PersonalInfoForm>()
  const { state, action } = useStateMachine<StoreProps>(updateAction)

  const onSubmit = (data: PersonalInfoForm) => {
    try {
      action({ data, section: UiContentEnum.ADDRESS_INFO })
    } catch (error) {
      console.error(error)
    }
  }

  const prevCallback = () => {
    toggleCheckout()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid min="50ch" gutter="5.5rem">
        <Input
          placeholder="Name"
          name="name"
          ref={register}
          defaultValue={state.data.name}
        />
        <Input
          placeholder="ID"
          name="id"
          ref={register}
          defaultValue={state.data.id}
        />
        <Input
          placeholder="Phone"
          name="phone"
          ref={register}
          defaultValue={state.data.phone}
        />
      </Grid>
      <Toolbar prev={prevCallback} isLastStep={false} isFirstStep />
    </form>
  )
}
