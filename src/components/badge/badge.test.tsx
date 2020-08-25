// Packges
import React from 'react'
import { render } from '@testing-library/react'

// Components
import { Badge } from './badge'

// Mock props
import { mockProps } from './mock-props'
import { withThemeProvider } from '~/hocs'

describe('<Avatar />', () => {
  it('Should render the content', () => {
    const { getByTestId } = render(
      withThemeProvider(<Badge {...mockProps.content} />)
    )

    const content = getByTestId('content')

    expect(content.textContent).toBe(String(mockProps.content.content))
  })
})
