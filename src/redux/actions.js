/**
 * Use these to dispatch actions from your components
 */
import { UPDATE_DETAILS, RESET_DETAILS, UPDATE_CHECKBOXES, RESET_CHECKBOXES, NEXT_STEP, UPDATE_PROGRESS } from './actionTypes'

export const updateDetails = details => ({
  type: UPDATE_DETAILS,
  payload: details
})

export const resetDetails = () => ({
  type: RESET_DETAILS
})

export const updateCheckboxes = checkboxes => ({
  type: UPDATE_CHECKBOXES,
  payload: checkboxes
})

export const resetCheckboxes = () => ({
  type: RESET_CHECKBOXES
})

export const nextStep = progress => ({
  type: NEXT_STEP,
  payload: progress
})

export const updateProgress = progress => ({
  type: UPDATE_PROGRESS,
  payload: progress
})