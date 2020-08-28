import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

// Components
import { Button } from './button'

// HOCs
import { withThemeProvider } from '~/hocs'

describe('<Button />', () => {
  it('Should pass alog input props', () => {
    const handleChange = jest.fn()

    const { getByTestId } = render(
      withThemeProvider(
        <Button onClick={handleChange} variant="primary">
          Click me!
        </Button>
      )
    )

    const button = getByTestId('button')

    act(() => {
      fireEvent.click(button)
    })

    expect(handleChange).toBeCalled()
  })
})
