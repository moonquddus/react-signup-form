import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import CheckboxForm from './CheckboxForm'
import store from '../redux/store'

test('Renders the updates checkbox from the checkbox form', () => {
  const { getByText } = render(<Provider store={store}><CheckboxForm /></Provider>)
  const linkElement = getByText(/Receive updates about Tray.io product by email/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders the other comms checkbox from the checkbox form', () => {
  const { getByText } = render(<Provider store={store}><CheckboxForm /></Provider>)
  const linkElement = getByText(/Receive communication by email for other products created by the Tray.io team/i)
  expect(linkElement).toBeInTheDocument()
})