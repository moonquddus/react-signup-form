import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import EmailIcon from '@material-ui/icons/Done'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 15
  },
  icon: {
    fontSize: '10em'
  }
}))

const Success = (props) => {
  const { details, checkboxes } = props
  const classes = useStyles()

  useEffect(() => {
    console.log('NAME:', details.name)
    console.log('ROLE:', details.role)
    console.log('EMAIL:', details.email)
    console.log('PASSWORD:', details.password)
    console.log('RECEIVE UPDATES:', checkboxes.productUpdates)
    console.log('RECEIVE COMMS:', checkboxes.otherComms)
  })

  return (
    <div id='success-message' className={classes.root}>
      <Typography variant='h3'>Thanks for signing up!</Typography>
      <EmailIcon className={classes.icon} color='primary' />
      <Typography variant='body1'>
        An email has been sent to <strong>{details ? details.email : 'your email address'}</strong>. Please follow the link in that email to verify and complete your registration!
      </Typography>
      <Typography variant='caption'>
        (pssst - check the browser console)
      </Typography>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    details: state.userDetails,
    checkboxes: state.checkboxes
  }
}

export default connect(mapStateToProps)(Success)
