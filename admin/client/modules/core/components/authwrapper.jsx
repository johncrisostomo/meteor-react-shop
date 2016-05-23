import React from 'react';

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
    <h1>Please log in!</h1>
  );
};

export default Authwrapper;
