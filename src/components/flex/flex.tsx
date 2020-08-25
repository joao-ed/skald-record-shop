// Packages
import React, { FC } from 'react'
import { Flex as RebassFlex } from 'rebass/styled-components'
import { FlexProps as RebassFlexProps } from 'rebass'

export type FlexProps = RebassFlexProps

// I like to make a "proxy" between my code and external libs.
export const Flex: FC<FlexProps> = (props) => <RebassFlex {...props} />
