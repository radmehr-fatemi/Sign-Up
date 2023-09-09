import React from 'react';
import './App.scss';
import { Switch , Route ,Redirect } from "react-router-dom";

import SignUp from './assets/component/SignUp';
import Login from './assets/component/Login';

const App = () => {
  return (
    <div className='app' >
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Redirect from='/' to='/signup' />
      </Switch>
    </div>
  );
};

export default App;