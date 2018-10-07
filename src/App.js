import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            logged: true,
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path="/login" />
                <Route path="/" />
                <Redirect to="/login" />
            </Switch>
        );
    }
}

export default App;
