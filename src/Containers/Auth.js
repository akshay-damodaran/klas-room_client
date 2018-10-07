import React from 'react';
import axios from 'axios';

import Login from '../Components/Login';
import Register from '../Components/Register';
import apiUrl from '../conf';

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            login: true,
            role: "student"
        };
    }

    onChange(key, value) {
        this.setState({
            [key]: value,
        });
    }

    async onLogin() {
        const {email, password, role} = this.state;
        const response = await axios.post(`${apiUrl}login/signin`, {
            email,
            password,
            role,
        });
        this.props.setAccesstoken(response.data.token);
    }

    renderLogin() {
        const { login } = this.state;
        return (
            <Login
                role={this.state.role}
                onEmail={value => this.onChange('email', value)}
                onPassword={value => this.onChange('password', value)}
                onRoleChange={value => this.onChange('role', value)}
                onLogin={() => this.onLogin()}
                toggleLogin={() => this.setState({login: !login})}
            />
        );
    }

    renderRegister() {
        return (
            <Register
                role={this.state.role}
                onName={value => this.onChange('name', value)}
                onEmail={value => this.onChange('email', value)}
                onPassword={value => this.onChange('password', value)}
                onRoleChange={value => this.onChange('role', value)}
                onRegister={() => this.onRegister()}
            />
        )
    }

    render() {
        const {login} = this.state;
        return(
            <div>
                {login ? this.renderLogin() : this.renderRegister()}
            </div>
        );
    }
}

export default Auth;
