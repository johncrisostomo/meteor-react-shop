import React from 'react';
import AuthWrapper from '../containers/authwrapper.js';
import Navbar from '../containers/navbar.js';

const Layout = ({content = () => null }) => (
  <div>
    <div>
      <AuthWrapper> 
        <Navbar />  
        {content()}
      </AuthWrapper>
    </div>
  </div>
);

export default Layout;
