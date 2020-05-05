import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import Success from './Success'
import store from '../redux/store'

test('Renders success message', () => {
  const { getByText } = render(<Provider store={store}><Success /></Provider>)
  const linkElement = getByText(/Thanks for signing up!/i)
  expect(linkElement).toBeInTheDocument()
})