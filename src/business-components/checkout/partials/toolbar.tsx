// Packages
import React, { FC } from 'react'

// Components
import { Grid, Button } from '~/components'

const FINISH = 'FINISH'
const NEXT = 'NEXT'
const BACK = 'BACK'
const BACK_TO_ITEMS = 'BACK TO ITEMS'

interface ToolbarProps {
  isFirstStep: boolean
  isLastStep: boolean
  prev: () => void
}

export const Toolbar: FC<ToolbarProps> = ({
  isFirstStep,
  isLastStep,
  prev
}) => (
  <Grid min="30ch" gutter="2rem">
    <Button m="2rem" variant="primary" type="button" onClick={prev}>
      {isFirstStep ? BACK_TO_ITEMS : BACK}
    </Button>
    <Button m="2rem" variant="primary" type="submit">
      {isLastStep ? FINISH : NEXT}
    </Button>
  </Grid>
)
