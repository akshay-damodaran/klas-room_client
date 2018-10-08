import React, { Component } from 'react';
import ChannelMenu from '../Components/ChannelMenu';
import ChannelView from '../Components/ChannelView';
import '../styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                <div className="home channel-menu">
                    <ChannelMenu/>
                </div>
                <div className="home channel-view">
                    <ChannelView/>
                </div>
            </div>
        );
    }
}

export default Home;