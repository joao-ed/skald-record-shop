// Packages
import React, { FC, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { Input } from '@rebass/forms'
import cepPromise from 'cep-promise'

// Components
import { OrderResume, Stack, Button, Grid } from '~/components'
import { useToggle } from 'react-use'

const PersonalInfo: FC = () => {
  const { register } = useFormContext()

  return (
    <Grid min="50ch" gutter="5.5rem">
      <Input placeholder="Name" name="name" ref={register} />
      <Input placeholder="ID" name="id" ref={register} />
      <Input placeholder="Phone" name="phone" ref={register} />
    </Grid>
  )
}
const AddressInfo: FC = () => {
  const { register, setValue } = useFormContext()
  const [loading, toggleLoading] = useToggle(false)

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
    <Grid min="30ch" gutter="5.5rem">
      <Input
        name="zipcode"
        placeholder="zipcode"
        ref={register}
        onBlur={(e) => {
          if (e.target.value !== '') fetchCEP(e.target.value)
        }}
      />
      <Input
        name="street"
        disabled={loading}
        placeholder="street"
        ref={register}
      />
      <Input
        name="neighborhood"
        disabled={loading}
        placeholder="neighborhood"
        ref={register}
      />
      <Input name="city" disabled={loading} placeholder="city" ref={register} />
      <Input
        name="state"
        disabled={loading}
        placeholder="state"
        ref={register}
      />
    </Grid>
  )
}
const PaymentInfo: FC = () => {
  const { register } = useFormContext()
  return (
    <Grid min="30ch" gutter="5.5rem">
      <Input placeholder="Owner" ref={register} />
      <Input placeholder="CVV" ref={register} />
      <Input placeholder="Card number" ref={register} />
      <Input placeholder="Expiration date ex(03/21)" ref={register} />
    </Grid>
  )
}

enum UiContentEnum {
  PERSONAL_INFO,
  ADDRESS_INFO,
  PAYMENT_INFO
}

interface CheckoutProps {
  orderAmount: number
  toggleCheckout: () => void
}

const FINISH = 'FINISH'
const NEXT = 'NEXT'
const BACK = 'BACK'
const BACK_TO_ITEMS = 'BACK TO ITEMS'

export const Checkout: FC<CheckoutProps> = ({
  orderAmount,
  toggleCheckout
}) => {
  const methods = useForm()

  const [section, setSection] = useState<UiContentEnum>(0)

  const uiContent: Record<UiContentEnum, React.ReactNode> = {
    0: <PersonalInfo />,
    1: <AddressInfo />,
    2: <PaymentInfo />
  }

  const isLastStep = section === UiContentEnum.PAYMENT_INFO
  const isFirstStep = section === UiContentEnum.PERSONAL_INFO

  return (
    <Grid min="30ch" gutter="4rem">
      <FormProvider {...methods}>
        <Stack space="4rem">
          {uiContent[section]}
          <Grid min="30ch" gutter="2rem">
            <Button
              m="2rem"
              variant="primary"
              onClick={() =>
                !isFirstStep ? setSection((prev) => prev - 1) : toggleCheckout()
              }
            >
              {isFirstStep ? BACK_TO_ITEMS : BACK}
            </Button>
            <Button
              m="2rem"
              variant="primary"
              onClick={() =>
                setSection((prev) => (!isLastStep ? prev + 1 : prev))
              }
            >
              {isLastStep ? FINISH : NEXT}
            </Button>
          </Grid>
        </Stack>
      </FormProvider>
      <OrderResume total={orderAmount} />
    </Grid>
  )
}
