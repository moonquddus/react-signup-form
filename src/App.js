import React, {useState} from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from './components/TabPanel';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

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
}));

function App() {
  const classes = useStyles()

  // If we wanted
  const [progress, setProgress] = useState(0)

  const handleChange = (event, newValue) => {
    setProgress(newValue)
  }

  // We can make the tab data an object we can configure outisde the component, then we can add/edit as many tabs as we like
  // ... but that would be a tad overkill for this
  return (
    <div className='App'>
      <Typography variant='h1' className={classes.centeredText}>
        Welcome!  
      </Typography>
      <Card className={classes.root}>
        <AppBar position='static'>
          <Tabs value={progress} onChange={handleChange} aria-label='simple tabs example' variant='fullWidth' scrollButtons='auto'>
            <Tab label='User' value={0} />
            <Tab label='Privacy' value={1} />
            <Tab label='Done' value={2} />
          </Tabs>
        </AppBar>
        <CardContent>
          <TabPanel value={progress} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={progress} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={progress} index={2}>
            Item Three
          </TabPanel>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
