import React, { Component } from 'react';
import ChannelMenu from '../Components/ChannelMenu';
import ChannelView from '../Components/ChannelView';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channelMessages: [{
                channelId: 1,
                isChannelActive: true,
                channelName: 'Avinash'
            }, {
                channelId: 2,
                isChannelActive: false,
                channelName: 'Damu'
            }, {
                channelId: 3,
                isChannelActive: false,
                channelName: 'Suddu'
            }, {
                channelId: 4,
                isChannelActive: false,
                channelName: 'JD'
            }]
        }
    }

    render() {
        return (
            <div className='Home'>
                <h2 className='application-title'>
                    Klas-room
                </h2>
                <ChannelMenu
                />
                <ChannelView
                    mitter={this.props.mitter}
                    channelMessages={this.state.channelMessages}
                />
            </div>
        );
    }
}

export default Home;