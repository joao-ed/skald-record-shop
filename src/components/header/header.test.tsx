// Packages
import React from 'react'
import { render } from '@testing-library/react'

// Components
import { Header } from './header'

// HOCs
import { withThemeProvider } from '~/hocs'

describe('<Header />', () => {
  test('should render Header component with a children component', () => {
    const { getByText } = render(
      withThemeProvider(
        <Header>
          <button>click me!</button>
        </Header>
      )
    )
    expect(getByText('click me!')).toBeTruthy()
  })
})
