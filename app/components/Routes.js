import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { Grid } from './styled/Styles';
import AppName from './AppName';
import Runs from './Runs';
import Raised from './Raised';
import VsGoal from './VsGoal';
import ChosenCharity from './ChosenCharity';

const Routes = () => {
  return (
    <Router>
      <Grid>
        <Navbar />
        <AppName />
        <Runs />
        <Raised />
        <VsGoal />
        <ChosenCharity />
        <div>
          <Route
            path='/oauth'
            component={() => {
              window.location.href =
                'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22C54V&redirect_uri=http%3A%2F%2Flocalhost&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=31536000';
              return null;
            }}
          />
        </div>
      </Grid>
    </Router>
  );
};

export default Routes;

// 31536000 = 1 yr
