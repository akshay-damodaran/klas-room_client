import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Auth from './Containers/Auth';
import Home from './Containers/Home';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            logged: false,
            key: '',
        };
    }

    render() {
        const {logged} = this.state;
        const {mitter} = this.props;
        return (
            <Switch>
                <Route
                    exact
                    path="/auth"
                    render={props => <Auth
                        {...props}
                        logged={logged}
                    />}
                />
                <Route
                    path="/"
                    render={props => <Home
                        {...props}
                        logged={logged}
                        mitter={mitter}
                    />}
                />
                <Redirect to="/auth" />
            </Switch>
        );
    }
}

export default App;
