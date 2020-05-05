import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import DetailsForm from './DetailsForm'
import store from '../redux/store'

test('Renders Full Name from the details form', () => {
  const { getByText } = render(<Provider store={store}><DetailsForm /></Provider>)
  const linkElement = getByText(/Full Name/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders Role from the details form', () => {
  const { getByText } = render(<Provider store={store}><DetailsForm /></Provider>)
  const linkElement = getByText(/Role/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders Email Address from the details form', () => {
  const { getByText } = render(<Provider store={store}><DetailsForm /></Provider>)
  const linkElement = getByText(/Email Address/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders Password from the details form', () => {
  const { getByText } = render(<Provider store={store}><DetailsForm /></Provider>)
  const linkElement = getByText(/Password/i)
  expect(linkElement).toBeInTheDocument()
})