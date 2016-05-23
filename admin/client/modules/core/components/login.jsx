import React from 'react';

class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.login(email, password);    
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
         <h1>Log In</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label>Email :</label>
              <input type="email" className="form-control" 
                ref="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input type="password" className="form-control" 
                ref="password" placeholder="Password" required />
            </div>
            <button className="btn btn-primary pull-right" type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
