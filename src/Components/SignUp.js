import React from 'react';

import "../styles/Login.css";

class SignUp extends React.Component {
  static renderNoLoader() {
    return (
      <span>Register</span>
    );
  }

  static renderLoader() {
    return (
      <div>
        <span>Registering</span>
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
      role: "student"
    }
  }

  handleRegister(e) {
    e.preventDefault();
    const { role } = this.state;
    const name = this.name.value;
    const email = this.email.value;
    const id = this.rollno.value;
    if (this.password.value.length < 8) {
      alert('Password must be of minimum 8 characters!');
    } else {
      const password = this.password.value;
      this.props.registerCredentials({ name, email, password, role, id });
    }
  }

  render() {
    const { role } = this.state;
    return (
      <div>
        <h2 className="form-signin-heading">Register</h2>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          ref={ref => this.name = ref}
          placeholder="Name"
          required
        />
        <br />
        <label htmlFor="email">Email Id</label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          ref={ref => this.email = ref}
          placeholder="Email Id"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={ref => this.password = ref}
          placeholder="Password"
          required
        />
        <p>Minimum length is 8 characters</p>

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
        <br />
        {this.state.role === "student" ?
          <React.Fragment>
            <label htmlFor="rollno">Roll No</label>
            <input
              type="text"
              className="form-control"
              id="rollno"
              name="rollno"
              ref={ref => this.rollno = ref}
              placeholder="Roll No"
              required
            />
          </React.Fragment>
          :
          <React.Fragment>
            <label htmlFor="rollno">Emp Id</label>
            <input
              type="text"
              className="form-control"
              id="rollno"
              name="rollno"
              ref={ref => this.rollno = ref}
              placeholder="Employee Id"
              required
            />
          </React.Fragment>
        }

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={(e) => { this.handleRegister(e); }}
        >
          {this.props.loginPending ? SignUp.renderLoader() : SignUp.renderNoLoader()}
        </button>
        <br />
        <p>
          <span>Already registered? Login
            {' '}
            <a onClick={() => this.props.togglePage()}>Here</a>
          </span>
        </p>
      </div>
    );
  }
}

export default SignUp;
