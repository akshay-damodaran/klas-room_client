import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';

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
                    <img src={require("../images/user-icon.svg")} className="img" />
                    <h3>{'Welcome Guest!'}</h3>
                </div>
                <div className="channel-menu list">
                    <div className="list search">
                        <Input
                            className="list search-input"
                            onClick={() => { }}
                            placeholder={'Search your channel'}
                        />
                    </div>
                    <div className="list subscribed">
                        <List>
                            {
                                this.state.subscribedChannels.map((item) =>
                                    <ListItem>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                )
                            }
                        </List>
                    </div>
                    <div className="list unsubscribed">
                        <List>
                            {
                                this.state.unsubscribedChannels.map((item) =>
                                    <ListItem>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <h1>{item.channelName}</h1>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                )
                            }
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelMenu;