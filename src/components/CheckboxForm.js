import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateCheckboxes, nextStep } from '../redux/actions'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: 20
    }
  },
  fullWidth: {
    width: '100%'
  },
  alignRight: {
    textAlign: 'right'
  }
}))

function CheckboxForm(props) {
  const { progress, dispatch, checkboxes } = props

  const [productUpdates, setProductUpdates] = useState(checkboxes.productUpdates)
  const [otherComms, setOtherComms] = useState(checkboxes.otherComms)

  const handleSubmit = event => {
    event.preventDefault()
    const inputCheckboxes = {productUpdates, otherComms}

    dispatch(updateCheckboxes(inputCheckboxes))
    dispatch(nextStep(progress))
  }

  const classes = useStyles()

  return (
    <form className={classes.root}>
      <FormControl>
        <FormControlLabel
          control={<Checkbox id='product-update-checkbox' checked={productUpdates} onChange={event => setProductUpdates(event.target.checked)} name='productUpdates' />}
          label='Receive updates about Tray.io product by email'
        />
      </FormControl>

      <FormControl>
        <FormControlLabel
          control={<Checkbox id='other-comms-checkbox' checked={otherComms} onChange={event => setOtherComms(event.target.checked)} name='otherComms' />}
          label='Receive communication by email for other products created by the Tray.io team'
        />
      </FormControl>

      <div className={classes.alignRight}>
        <Button
          id='checkbox-submit'
          variant='contained'
          color='primary'
          type='submit'
          size='large'
          onClick={handleSubmit}
        >
          Submit
        </Button> 
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return { 
    checkboxes: state.checkboxes,
    progress: state.progress
  }
}

export default connect(mapStateToProps)(CheckboxForm)
