import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { Mitter } from '@mitter-io/web'

import store from './store';
import Auth from './Containers/Auth';
import Home from './Containers/Home';
import './index.css';

// Enter the application id from the mitter.io panel
// const mitter = Mitter.forWeb('107N6-U7uAq-CnVJF-FLp8C');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/auth" component={Auth} />
                <Route path="/" component={Home} />
                <Redirect to="/auth" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
