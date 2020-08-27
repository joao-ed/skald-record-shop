// Packages
import React, { FC } from 'react'
import { Image } from 'rebass'
import { useImage } from 'react-image'
import { Choose } from 'react-extras'

// Components
import { Flex, Box, Text, HeartSpinner } from '~/components'

// Types
import { Product } from '~/types'

// Styles
import * as S from './styles'

// Helpers
import { stringFormat } from '~/helpers'

interface ProductCardProps {
  topbar: React.ReactNode
  toolbar: React.ReactNode
  product: Product
}

const FALLBACK_PROD_IMAGE = '/images/empty-bag.svg'

export const ProductCard: FC<ProductCardProps> = ({
  topbar,
  toolbar,
  product: { title, price, image }
}) => {
  const { src, isLoading } = useImage({
    srcList: [String(image), FALLBACK_PROD_IMAGE],
    useSuspense: false
  })

  return (
    <S.Container>
      <Flex flexDirection="column">
        <Box alignSelf="flex-end">{topbar}</Box>
        <Box alignSelf="center">
          <Choose>
            <Choose.When
              condition={isLoading}
              render={() => <HeartSpinner />}
            />
            <Choose.Otherwise render={() => <Image src={src} alt={title} />} />
          </Choose>
        </Box>
        <Box marginTop="1rem">
          <Text>{title}</Text>
        </Box>
        <Box marginTop="1rem" alignSelf="flex-start">
          <Text>{stringFormat.currency(price)}</Text>
        </Box>
        <Box alignSelf="flex-start" width="100%">
          {toolbar}
        </Box>
      </Flex>
    </S.Container>
  )
}
