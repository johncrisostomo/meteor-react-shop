import React from 'react';

class Navbar extends React.Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
      <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Admin Panel</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
      <li><a href="#">Products</a></li>
      <li><a href="/categories">Categories</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
      </ul>
      </div> 
      </div>

      </nav>
    );
  }
}

export default Navbar;
