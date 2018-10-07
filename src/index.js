import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Mitter } from '@mitter-io/web'

// Enter the application id from the mitter.io panel
const mitter = Mitter.forWeb('107N6-U7uAq-CnVJF-FLp8C')

ReactDOM.render(
    <App
        mitter={mitter}
    />,
    document.getElementById('root')
);

registerServiceWorker();
