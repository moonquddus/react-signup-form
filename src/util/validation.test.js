import * as utils from './validation'

test('All fields pass', () => {
  const mockData = {
    name: 'Test Person',
    role: 'QA Engineer',
    email: 'my@email.com',
    password: 'ABCabc1234'
  }

  const errors = utils.validateFields(mockData)
  expect(errors).toEqual({})
})

test('Missing name field fails', () => {
  const mockData = {
    name: '',
    role: 'QA Engineer',
    email: 'my@email.com',
    password: 'ABCabc1234'
  }

  const errors = utils.validateFields(mockData)
  expect(errors).toEqual({
    name: 'Please input your name.'
  })
})

test('Invalid email field fails', () => {
  const mockData = {
    name: 'Test Person',
    role: 'QA Engineer',
    email: '',
    password: 'ABCabc1234'
  }

  const errors = utils.validateFields(mockData)
  expect(errors).toEqual({
    email: 'Your email is invalid.'
  })
})

test('Invalid password field fails', () => {
  const mockData = {
    name: 'Test Person',
    role: 'QA Engineer',
    email: 'my@email.com',
    password: 'test'
  }

  const errors = utils.validateFields(mockData)
  expect(errors).toEqual({
    password: 'Your password needs to be at least 10 characters and contain 1 lowercase & 1 uppercase character, and 1 number.'
  })
})