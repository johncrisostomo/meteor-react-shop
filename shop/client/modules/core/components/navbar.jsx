import React from 'react';
import Cart from '../../cart/containers/cart_view';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{"marginBottom":0}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Welcome Shop</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <Cart />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
