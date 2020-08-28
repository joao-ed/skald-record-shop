// Packages
import React, { ReactNode } from 'react'
import { Choose } from 'react-extras'
import { ButtonProps as RebassButtonProps } from 'rebass'

// Components
import { Box, Flex } from '../'

// Styles
import { StyledButton } from './styles'

export interface ButtonProps extends RebassButtonProps {
  destructive?: boolean
  borderless?: boolean
  icon?: ReactNode
}

export const Button = ({
  children,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton data-testid="button" variant={variant} {...rest}>
      <Choose>
        <Choose.When condition={Boolean(icon)}>
          <Flex>
            <Box pr="0.5rem">{icon}</Box>
            <Box sx={{ whiteSpace: 'nowrap' }}>{children}</Box>
          </Flex>
        </Choose.When>
        <Choose.Otherwise>{children}</Choose.Otherwise>
      </Choose>
    </StyledButton>
  )
}
