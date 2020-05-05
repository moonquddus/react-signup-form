import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import TabPanel from './TabPanel'
import store from '../redux/store'

test('Renders a tab panel with the children rendered correctly', () => {
  const { getByText } = render(<Provider store={store}><TabPanel>This is a tab panel.</TabPanel></Provider>)
  const linkElement = getByText(/This is a tab panel./i)
  expect(linkElement).toBeInTheDocument()
})