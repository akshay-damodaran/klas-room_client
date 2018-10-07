import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './Components/Home';

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
            <div>
                <Home/>
            </div>
        );
        // return (
        //     <Switch>
        //         <Route exact path="/login" />
        //         <Route path="/" />
        //         <Redirect to="/login" />
        //     </Switch>
        // );
    }
}

export default App;
