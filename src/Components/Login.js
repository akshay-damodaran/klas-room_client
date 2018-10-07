import React from 'react';

const Login = ({ role = "student", onEmail = f => f, onPassword = f => f, onRoleChange = f => f, onLogin = f => f, toggleLogin = f => f }) => (
    <div>
        <h1>Login</h1>
        <div>
            <label htmlFor="email">E-mail Id</label>
            <input type="text" name="email" onChange={e => onEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={e => onPassword(e.target.value)} />
            <label htmlFor="role">You are a ...</label>
            <label>
                <input
                    type="radio"
                    value="student"
                    checked={role === "student"}
                    onChange={e => onRoleChange(e.target.value)}
                />
                Student
            </label>
            <label>
                <input
                    type="radio"
                    value="faculty"
                    checked={role === "faculty"}
                    onChange={e => onRoleChange(e.target.value)}
                />
                Faculty
            </label>
            <button onClick={() => onLogin()}>Log In</button>
            <p>New Here ? <a onClick={() => toggleLogin()}>Sign up here</a></p>
        </div>
    </div>
);

export default Login;
