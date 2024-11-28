// src/App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
import Report from './Report';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm fetchData={() => {}} />
      <Report />
    </div>
  );
};

export default App;
