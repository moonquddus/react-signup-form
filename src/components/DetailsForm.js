import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateDetails, nextStep } from '../redux/actions'
import { validateFields } from '../util/validation'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
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

// A lib like redux-form would be great in this scenario - but I just needed a basic form, nothing too fancy
function DetailsForm(props) {
  const { progress, details, dispatch } = props
  const [showPassword, setShowPassword] = useState(false)

  // The state for the form
  // The global store doesn't need to know about this until we're moving on
  const [name, setName] = useState(details.name)
  const [role, setRole] = useState(details.role)
  const [email, setEmail] = useState(details.email)
  // Don't re-fill in the password, for security purposes
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    role: '',
    email: '',
    password: ''
  })

  const handleClickShowPassword = event => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = event => {
    event.preventDefault()
    const inputDetails = {name, role, email, password}
    const validationErrors = validateFields(inputDetails)
    
    if (Object.keys(validationErrors).length){
      setErrors(validationErrors)
    }
    else{
      dispatch(updateDetails(inputDetails))
      dispatch(nextStep(progress))
    }

  }

  const classes = useStyles()

  return (
    <form className={classes.root}>
      <TextField
        error={!!errors.name}
        value={name}
        id='full-name'
        name='name'
        label='Full Name'
        placeholder='John Smith'
        onChange={e => setName(e.target.value)}
        helperText={errors.name}
        fullWidth
        required
      />

      <TextField
        error={!!errors.role}
        value={role}
        id='role'
        name='role'
        label='Role'
        placeholder='Software Engineer'
        onChange={e => setRole(e.target.value)}
        helperText={errors.role}
        fullWidth
      />

      <TextField
        error={!!errors.email}
        value={email}
        id='email'
        name='email'
        label='Email Address'
        placeholder='email@example.com'
        onChange={e => setEmail(e.target.value)}
        helperText={errors.email}
        fullWidth
        required
      />

      <FormControl className={classes.fullWidth} error={!!errors.password}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input
          error={!!errors.password}
          type={showPassword ? 'text' : 'password'}
          className='full-width'
          value={password}
          id='password'
          name='password'
          onChange={e => setPassword(e.target.value)}
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
        <FormHelperText id='password-helper-text'>{errors.password}</FormHelperText>
      </FormControl>
      <div className={classes.alignRight}>
        <Button
          id='details-submit'
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
    details: state.userDetails,
    progress: state.progress
  }
}

export default connect(mapStateToProps)(DetailsForm)
