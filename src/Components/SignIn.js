import React from 'react';

import "../styles/Login.css";

class SignIn extends React.Component {
  static renderNoLoader() {
    return (
      <span>Log In</span>
    );
  }

  static renderLoader() {
    return (
      <div>
        <span>Logging In</span>
        {' '}
        <span className="loader" id="loader-2">
          <span />
          <span />
          <span />
        </span>
      </div>
    );
	}
	
	constructor() {
		super();
		this.state = {
			role: 'student',
		};
	}

  handleLogin(e) {
    e.preventDefault();
    const userName = this.username.value;
		const password = this.password.value;
		const { role } = this.state;
    this.props.loginCredentials({ userName, password, role }, this.props.history);
  }

  render() {
		const { role } = this.state;
    return (
      <div>
        <h2 className="form-signin-heading">Login</h2>
        <input
          type="text"
          className="form-control"
          name="username"
          ref={(ref) => { this.username = ref; }}
          placeholder="Email Id"
          required
        />
        <input
          type="password"
          className="form-control"
          name="password"
          ref={(ref) => { this.password = ref; }}
          placeholder="Password"
          required
        />
        <br />
        <label htmlFor="role">You are a</label>
				<label>
					<input
						type="radio"
						value="student"
						checked={role === "student"}
						onChange={e => this.setState({ role: e.target.value })}
					/>
					Student
				</label>
				<label>
					<input
						type="radio"
						value="faculty"
						checked={role === "faculty"}
						onChange={e => this.setState({ role: e.target.value })}
					/>
					Faculty
				</label>
        <p id="signin-forgot"><a onClick={() => this.props.forgotPassword()}>Forgot Password?</a></p>

        <p><span style={{ color: 'red' }}>{this.props.errorMessage}</span></p>

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={(e) => { this.handleLogin(e); }}
        >
          {this.props.loginPending ? SignIn.renderLoader() : SignIn.renderNoLoader()}
        </button>
        <br />
        <p>
          <span>New user? Register
            {' '}
            <a onClick={() => this.props.togglePage()}>Here</a>
          </span>
        </p>
      </div>
    );
  }
}

export default SignIn;
