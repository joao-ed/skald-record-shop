// Packages
import React, { FC } from 'react'
import { Text as RebassText } from 'rebass/styled-components'
import { TextProps as RebassTextProps } from 'rebass'

export interface TextProps extends RebassTextProps {
  uppercase?: boolean
}

export const Text: FC<TextProps> = (props) => <RebassText {...props} />
