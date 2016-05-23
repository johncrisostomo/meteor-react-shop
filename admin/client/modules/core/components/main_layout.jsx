import React from 'react';
import AuthWrapper from '../containers/authwrapper.js';

const Layout = ({content = () => null }) => (
  <div>
    <div>
      <AuthWrapper> 
      {content()}
      </AuthWrapper>
    </div>
  </div>
);

export default Layout;
