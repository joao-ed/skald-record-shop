// Packages
import React from 'react'

// Components
import { Button } from './button'

// Mockprops
import { mockProps } from './mock-props'

export default {
  title: 'Components/Button'
}

export const Primary = () => <Button {...mockProps.primary}>Enviar</Button>
export const Secondary = () => <Button {...mockProps.secondary}>Enviar</Button>

export const PrimaryDestructive = () => (
  <Button {...mockProps.primaryDestructive}>Cancelar</Button>
)
export const SecondaryDestructive = () => (
  <Button {...mockProps.secondaryDestructive}>Cancelar</Button>
)
export const PrimaryDisabled = () => (
  <Button {...mockProps.primaryDisabled}>Cancelar</Button>
)
export const SecondaryDisabled = () => (
  <Button {...mockProps.secondaryDisabled}>Cancelar</Button>
)
