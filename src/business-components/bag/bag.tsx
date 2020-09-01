// Packages
import React, { FC } from 'react'
import { Choose } from 'react-extras'
import { Label, Input } from '@rebass/forms'
import { RemoveCircleOutline } from '@styled-icons/material'
import { useToggle } from 'react-use'

// Components
import {
  ActionList,
  Text,
  Box,
  IconButton,
  Field,
  Flex,
  OrderResume,
  Center
} from '~/components'

import { Checkout } from '../checkout'

// Hooks
import { useProductContext } from '~/hooks'

// Helpers
import { stringFormat } from '~/helpers'

// Contexts
import { BagProps } from '~/contexts'

// Styles
import * as S from './styles'

interface EntryItemProps {
  index: number
  item: BagProps
  removeCallback(index: number): void
}

const EntryItem: FC<EntryItemProps> = ({ index, item, removeCallback }) => {
  const { bag } = useProductContext()

  return (
    <S.Wrapper>
      <Box>
        <Field
          imageWidth="80px"
          variation="image"
          value={item.image}
          alt={item.title}
        />
      </Box>
      <S.WrapperText>
        <Text fontSize="large" alignSelf="flex-end" textAlign="center">
          {`${item.title} (${stringFormat.currency(
            item.price * item.quantity
          )})`}
        </Text>
      </S.WrapperText>
      <Box>
        <Label fontSize="small" htmlFor="quantity">
          Quantity
        </Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          maxWidth="60px"
          min="1"
          value={item.quantity}
          onChange={(e: any) =>
            e.target.value &&
            bag?.actions.addToBag(item, Number(e.target.value))
          }
        />
      </Box>
      <Box alignSelf="center" mt="2rem" pl="2rem">
        <IconButton
          icon={<RemoveCircleOutline width={30} />}
          color="red"
          onClick={() => removeCallback(index)}
        />
      </Box>
    </S.Wrapper>
  )
}
export const Bag = () => {
  const { bag } = useProductContext()
  const [checkout, setCheckout] = useToggle(false)

  const removeFromBag = (index: number) => bag?.actions.removeAt(index)

  const listOfProducts = bag?.list.map((item, index) => ({
    content: (
      <EntryItem item={item} index={index} removeCallback={removeFromBag} />
    )
  }))

  const orderAmount =
    bag?.list.reduce(
      (prev, { price, quantity }) => prev + quantity * price,
      0
    ) || 0

  return (
    <Choose>
      <Choose.When
        condition={checkout}
        render={() => (
          <Checkout toggleCheckout={setCheckout} orderAmount={orderAmount} />
        )}
      />
      <Choose.When
        condition={Boolean(listOfProducts && listOfProducts?.length > 0)}
        render={() =>
          listOfProducts && (
            <Flex justifyContent="space-between" flexWrap="wrap-reverse">
              <Box minWidth="70%">
                <ActionList<BagProps> actions={listOfProducts} />
              </Box>
              <Box minWidth="30%">
                <OrderResume total={orderAmount || 0} checkout={setCheckout} />
              </Box>
            </Flex>
          )
        }
      />
      <Choose.Otherwise
        render={() => (
          <Center>
            <h2>Your bag is empty :(</h2>
          </Center>
        )}
      />
    </Choose>
  )
}
