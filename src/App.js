import React from 'react';
import { Navigate, Route , Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;