// Packages
import React, { FC } from 'react'
import { Box as RebassBox } from 'rebass/styled-components'
import { BoxProps as RebassBoxProps } from 'rebass'

export type BoxProps = RebassBoxProps

export const Box: FC<BoxProps> = (props) => <RebassBox {...props} />
