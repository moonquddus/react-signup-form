import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateDetails } from '../redux/actions'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: 20
    }
  },
  fullWidth: {
    width: '100%'
  }
}))

function DetailsForm(props) {
  const { details, dispatch } = props
  const [showPassword, setShowPassword] = useState(false)
  const [inputDetails, setInputDetails] = useState({})

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const classes = useStyles()

  return (
    <form className={classes.root}>
      <TextField
        value={inputDetails.name}
        id='full-name'
        name='name'
        label='Full Name'
        placeholder='John Smith'
        fullWidth
        required
      />

      <TextField
        value={inputDetails.role}
        id='role'
        name='role'
        label='Role'
        placeholder='Software Engineer'
        fullWidth
      />

      <TextField
        value={inputDetails.email}
        id='email'
        name='email'
        label='Email Address'
        placeholder='email@example.com'
        fullWidth
        required
      />

      <FormControl className={classes.fullWidth}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          className='full-width'
          value={inputDetails.password}
          id='password'
          name='password'
          fullWidth
          required
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  )
}

const mapStateToProps = (state) => {
  return { details: state.details }
}

export default connect(mapStateToProps)(DetailsForm)
