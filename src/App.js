import React, { Component } from 'react';
import Home from './Containers/Home';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Home
                    mitter={this.props.mitter}
                />
          </div>
        );
    }
}

export default App;
