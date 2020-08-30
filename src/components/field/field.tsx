// Pacakges
import React, { FC, ReactNode } from 'react'
import * as CSS from 'csstype'
import { Flex, Text } from '~/components'
import { If, Choose } from 'react-extras'
import { identity } from 'ramda'
import { isFinite } from 'lodash'
import { useImage } from 'react-image'

// Styles
import { Label, Value, Image } from './styles'

// Components
import { HeartSpinner } from '~/components'

export interface FieldProps {
  value?: any
  label?: string
  variation?: string
  render?: FC
  direction?: CSS.FlexDirectionProperty
  children?: (value?: any, renderProps?: Record<string, any>) => ReactNode
  formatter?: (value: any) => any
  renderProps?: Record<string, any>
  leased?: boolean
  alt?: string
  imageWidth?: string
  labelColor?: string
  fieldColor?: string
  justifyContent?: string
  p?: string
  px?: string
  py?: string
  padding?: string
}

const FALLBACK_PROD_IMAGE = '/images/empty-bag.svg'

export const Field = (props: FieldProps) => {
  const {
    value,
    label,
    variation,
    renderProps = {},
    direction = 'column',
    children,
    formatter = identity,
    leased,
    alt,
    imageWidth,
    labelColor,
    fieldColor,
    justifyContent,
    ...rest
  } = props

  const transformedValue = formatter(value)

  const { src, isLoading } = useImage({
    srcList: [String(transformedValue), FALLBACK_PROD_IMAGE],
    useSuspense: false
  })

  return (
    <If condition={Boolean(value) || isFinite(value)}>
      <Flex flexDirection={direction} justifyContent={justifyContent} {...rest}>
        <If condition={Boolean(label)}>
          <Label data-testid="label" color={labelColor} {...renderProps}>
            {label}
          </Label>
        </If>
        {children ? (
          children(transformedValue, renderProps)
        ) : (
          <Choose>
            <Choose.When condition={variation == 'text'}>
              <Text color={fieldColor} fontWeight="body">
                {transformedValue}
              </Text>
            </Choose.When>
            <Choose.When condition={variation == 'image'}>
              <Choose>
                <Choose.When
                  condition={isLoading}
                  render={() => <HeartSpinner />}
                />
                <Choose.Otherwise
                  render={() => (
                    <Image
                      src={src}
                      alt={alt}
                      leased={leased}
                      imageWidth={imageWidth}
                    />
                  )}
                />
              </Choose>
            </Choose.When>
            <Choose.Otherwise>
              <Value data-testid="default-render" {...renderProps}>
                {transformedValue}
              </Value>
            </Choose.Otherwise>
          </Choose>
        )}
      </Flex>
    </If>
  )
}

Field.defaultProps = {
  leased: false
}
