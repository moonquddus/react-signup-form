import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';
import store from './redux/store';

test('Renders the Welcome title', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the tabs', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/Privacy/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the form labels', () => {
  const { getByLabelText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByLabelText(/Full Name/i);
  expect(linkElement).toBeInTheDocument();
});