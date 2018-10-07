import React from 'react';

const Login = ({onEmail = f => f, onPassword = f => f, onRoleSelect = f => f, onLogin = f => f}) => (
    <div>
        <h1>Login</h1>
        <div>
            <label htmlFor="email">E-mail Id</label>
            <input type="text" name="email" onChange={this.props.onEmail} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.props.onPassword} />
            <label htmlFor="role">You are a ...</label>
            <input type="radio" name="role" onChange={this.props.onRoleSelect} />
            <input type="radio" name="role" onChange={this.props.onRoleSelect} />
            <button onClick={this.props.onLogin} />
        </div>
    </div>
);
