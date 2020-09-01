// Packages
import React, { FC } from 'react'

// Components
import { Field, Button, Stack } from '~/components'

// Helpers
import { stringFormat } from '~/helpers'

// Styles
import * as S from './styles'
import { If } from 'react-extras'

const TAX = 1000

interface OrderResumeProps {
  total: number
  checkout?: () => void
}

export const OrderResume: FC<OrderResumeProps> = ({ total, checkout }) => {
  const { currency } = stringFormat
  return (
    <S.Wrapper>
      <Stack space="3rem">
        <h2>Customer order&apos;s resume</h2>
        <Field label={'Ship'} value={'FREE'} renderProps={{ color: 'green' }} />
        <Field
          label={'Tax'}
          value={TAX}
          renderProps={{ color: 'red' }}
          formatter={currency}
        />
        <Field label={'Discount'} value={0} formatter={currency} />
        <Field
          label={'total'}
          value={total + TAX}
          renderProps={{ color: 'green' }}
          labelColor="black"
          formatter={currency}
        />
        <If
          condition={Boolean(checkout)}
          render={() => (
            <Button variant="primary" onClick={checkout}>
              Checkout
            </Button>
          )}
        />
      </Stack>
    </S.Wrapper>
  )
}
