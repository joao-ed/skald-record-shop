// Packages
import React from 'react'
import { render } from '@testing-library/react'

// Components
import { Field } from '.'

// Mocks
import { mockProps } from './mock-props'

describe('<Field />', () => {
  it('should render children when provided', () => {
    const { getByTestId } = render(
      <Field value={mockProps.value}>
        {(value) => <h1 data-testid="children">{value}</h1>}
      </Field>
    )

    const children = getByTestId('children')

    expect(children.textContent).toBe(mockProps.value)
  })
  it('should render value if no children is provider', () => {
    const { getByTestId } = render(<Field value={mockProps.value} />)

    const defaulRender = getByTestId('default-render')

    expect(defaulRender.textContent).toBe(mockProps.value)
  })

  it('should render label if provided', () => {
    const { getByTestId } = render(
      <Field label={mockProps.label} value={mockProps.value} />
    )

    const label = getByTestId('label')

    expect(label.textContent).toBe(mockProps.label)
  })
})
