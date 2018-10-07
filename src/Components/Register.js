import React from 'react';

const Register = props => (
    <div>
        <h1>Register</h1>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={this.props.onName} />
            <label htmlFor="email">E-mail Id</label>
            <input type="text" name="email" onChange={this.props.onEmail} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.props.onPassword} />
            <label htmlFor="role">You are a ...</label>
            <label>
                <input
                    type="radio"
                    value="small"
                    checked={this.state.size === "small"}
                    onChange={this.handleChange}
                />
                Small
            </label>
            <label>
                <input
                    type="radio"
                    value="small"
                    checked={this.state.size === "small"}
                    onChange={this.handleChange}
                />
                Small
            </label>
            <button onClick={this.onLogin} />
        </div>
    </div>
);
