import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import axios from 'axios';

class ChannelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribedChannels: [{
                channelId: 3,
                isChannelActive: false,
                channelName: 'Suddu'
            }, {
                channelId: 4,
                isChannelActive: false,
                channelName: 'JD'
            }],
            unsubscribedChannels: [{
                channelId: 1,
                isChannelActive: true,
                channelName: 'Avinash'
            }, {
                channelId: 2,
                isChannelActive: false,
                channelName: 'Damu'
            }]
        }
    }

    componentWillMount() {
        axios.post({
            url: '',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            this.setState({
                subscribedChannels: res.data.subscribed,
                unsubscribedChannels: res.data.unsubscribed
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="channel-menu">
                <div className="channel-menu profile">
                    <img src={require("../images/user-icon.svg")} width="200" height="200" className="profile img" />
                </div>
                <div className="channel-menu list">
                    <div className="channel-menu search">
                        <Input 
                            className="channel-menu search-input"
                            onClick={() => {}} 
                        />
                    </div>
                    <div className="channel-menu subscribed">
                        {
                            this.state.subscribedChannels.map((item, i) =>
                                <div className="channel-menu subscribedChannel">
                                    <h4 className="channel-menu subscribed">{item.channelName}</h4>
                                </div>
                            )
                        }
                    </div>
                    <div className="channel-menu unsubscribed">
                        {
                            this.state.unsubscribedChannels.map((item, i) =>
                                <div className="channel-menu unsubscribedChannel">
                                    <h4 className="channel-menu unsubscribed">{item.channelName}</h4>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelMenu;