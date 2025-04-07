import logo from './logo.svg';
import './App.css';
import React from 'react';
import MemberRegistrationForm from './components/MemberRegistrationForm';
import FetchMembers from './components/FetchMembers';

const App = () => {
  return (
    <div>
      <h1>Member Management</h1>
      <MemberRegistrationForm />
      <hr />
      <FetchMembers />
    </div>
  );
};

export default App;
