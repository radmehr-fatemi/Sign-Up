import React from 'react';
import './App.scss';
import { Routes , Route ,Navigate } from "react-router-dom";

import SignUp from './component/SignUp';
import Login from './component/Login';

const App = () => {
  return (
    <div className='app' >
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/signup' />} />
      </Routes>
    </div>
  );
};

export default App;