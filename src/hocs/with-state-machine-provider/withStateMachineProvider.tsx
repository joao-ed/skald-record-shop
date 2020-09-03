// Packages
import React from 'react'

import { StateMachineProvider } from 'little-state-machine'

export const withStateMachineProvider = (component: React.ReactNode) => (
  <StateMachineProvider>{component} </StateMachineProvider>
)
