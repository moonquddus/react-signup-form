import configureStore from 'redux-mock-store'

// Actions to be tested
import * as actions from './actions'
import * as types from './actionTypes'

const mockStore = configureStore()
const store = mockStore() 

describe('Details Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })

  test('Correctly updates details', () => {
    const details = {
      name: 'Test Person',
      role: 'QA Engineer',
      email: 'my@email.com',
      password: 'ABCabc1234'
    }

    const expectedActions = [
      {
        payload: details,
        type: types.UPDATE_DETAILS,
      },
    ]

    store.dispatch(actions.updateDetails(details))
    expect(store.getActions(details)).toEqual(expectedActions)
  })

  test('Correctly resets details', () => {
    const expectedActions = [
      {
        type: types.RESET_DETAILS,
      },
    ]

    store.dispatch(actions.resetDetails())
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('Checkbox Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })
  test('Correctly resets checkboxes', () => {
    const checkboxes = {
      productUpdates: true,
      otherComms: true
    }

    const expectedActions = [
      {
        payload: checkboxes,
        type: types.UPDATE_CHECKBOXES,
      },
    ]

    store.dispatch(actions.updateCheckboxes(checkboxes))
    expect(store.getActions(checkboxes)).toEqual(expectedActions)
  })
})

describe('Progress Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })
  test('Correctly updates progress', () => {
    const expectedActions = [
      {
        payload: 2,
        type: types.UPDATE_PROGRESS,
      },
    ]

    store.dispatch(actions.updateProgress(2))
    expect(store.getActions(2)).toEqual(expectedActions)
  })
  test('Correctly increments progress', () => {
    const expectedActions = [
      {
        payload: 1,
        type: types.NEXT_STEP,
      },
    ]

    store.dispatch(actions.nextStep(1))
    expect(store.getActions(1)).toEqual(expectedActions)
  })
})