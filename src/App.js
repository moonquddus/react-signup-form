import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateProgress } from './redux/actions'

import DetailsForm from './components/DetailsForm'

import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LinearProgress from '@material-ui/core/LinearProgress'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TabPanel from './components/TabPanel'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    maxWidth: '100%',
    margin: 'auto'
  },
  centeredText: {
    textAlign: 'center',
    color: theme.palette.background.default
  }
}))

function App(props) {
  const { progress, dispatch } = props
  const classes = useStyles()

  // If we wanted
  // const [progress, setProgress] = useState(0)

  const handleChange = (event, newValue) => {
    setProgress(newValue)
  }

  const setProgress = (newProgress) => {
    dispatch(updateProgress(newProgress))
  }

  // We don't want the user skipping ahead - there's important stuff to be done on each tab!
  const checkDisabled = tabIndex => !progress || progress < tabIndex

  // We can make the tab data an object we can configure outisde the component, then we can add/edit as many tabs as we like
  // ... but that would be a tad overkill for this
  return (
    <div className='App'>
      <Typography variant='h1' className={classes.centeredText}>Welcome!</Typography>
      <Card className={classes.root}>
        <AppBar position='static'>
          <Tabs value={progress} onChange={handleChange} aria-label='simple tabs example' variant='fullWidth' scrollButtons='auto'>
            <Tab label='User' value={0} />
            <Tab label='Privacy' value={1} disabled={checkDisabled(1)} />
            <Tab label='Done' value={2} disabled={checkDisabled(2)} />
          </Tabs>
        </AppBar>
        <CardContent>
          <TabPanel value={progress} index={0}>
            <DetailsForm />
          </TabPanel>
          <TabPanel value={progress} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={progress} index={2}>
            Item Three
          </TabPanel>
          <LinearProgress variant="determinate" value={((progress) / 2) * 100} />
        </CardContent>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { progress: state.progress }
}

export default connect(mapStateToProps)(App)
