/*
 * Contains the user's input data and progress!
 * In a larger application, we'd actually split the reducers into their own files for better organization
 */

import { UPDATE_DETAILS, RESET_DETAILS, UPDATE_CHECKBOXES, RESET_CHECKBOXES, NEXT_STEP, UPDATE_PROGRESS } from "../actionTypes";

const initialState = {
  progress: 0,
  userDetails: {
    name: '',
    role: '',
    email: '',
    password: ''
  },
  checkboxes: {
    productUpdates: false,
    otherComms: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DETAILS: {
      const userDetails = action.payload
      return {...state, userDetails}
    }
    case RESET_DETAILS: {
      const { userDetails } = initialState
      return {...state, userDetails}
    }
    case UPDATE_CHECKBOXES: {
      const checkboxes = action.payload
      return {...state, checkboxes}
    }
    case RESET_CHECKBOXES: {
      const { checkboxes } = initialState
      return {...state, checkboxes}
    }
    case NEXT_STEP: {
      const progress = action.payload + 1
      return {...state, progress}
    }
    case UPDATE_PROGRESS: {
      const progress = action.payload
      return {...state, progress}
    }
    default:
      return state;
  }
}
