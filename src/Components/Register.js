import React from 'react';

const Register = ({ role = "student", onName = f => f, onEmail = f => f, onPassword = f => f, onRoleChange = f => f, onRegister = f => f }) => (
    <div>
        <h1>Register</h1>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={e => onName(e.target.value)} />
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
            <button onClick={() => onRegister()}>Sign Up</button>
        </div>
    </div>
);

export default Register;
