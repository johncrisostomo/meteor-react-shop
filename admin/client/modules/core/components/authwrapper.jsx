import React from 'react';
import Login from '../containers/login.js';

const Authwrapper = ({loggedIn, loggingIn, children}) => { 
   if (loggedIn) {
     return (
       <div>{children}</div>
     );
   }

   if (loggingIn) {
     return (
       <div>Loading</div>
     );
   }
  return (
    <Login />
  );
};

export default Authwrapper;
