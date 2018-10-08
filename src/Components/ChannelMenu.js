import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import axios from 'axios';
// import _ from 'lodash';

class ChannelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribedChannels: [{
                channelId: 3,
                isChannelActive: false,
                channelName: 'Suddu',
                channelTeacher: 'Sudarshana Patil'
            }, {
                channelId: 4,
                isChannelActive: false,
                channelName: 'JD',
                channelTeacher: 'Jagrutee Banda'
            }],
            unsubscribedChannels: [{
                channelId: 1,
                isChannelActive: true,
                channelName: 'Avinash',
                channelTeacher: 'Avinash Maurya'
            }, {
                channelId: 2,
                isChannelActive: false,
                channelName: 'Damu',
                channelTeacher: 'Akshay Damodaran'
            }],
            searchedResults: false
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

    handleChannel(item) {
        this.props.setChannel(item);
    }

    handleSubscribe(item) {

    }

    handleInputChange(event) {
        const searchKeyword = event.target.value;
        const allChannels = this.state.subscribedChannels.concat(this.state.unsubscribedChannels);
        
    }

    render() {
        return (
            <div className="channel-menu">
                <div className="channel-menu profile">
                    <img src={require("../images/user-icon.svg")} className="img" />
                    <h3>{'Welcome Guest!'}</h3>
                </div>
                <div className="channel-menu search">
                    <input
                        className="channel-menu search-input"
                        onChange={(e) => this.handleInputChange(e)}
                        placeholder={'Search your channel'}
                    />
                </div>
                <div className="channel-menu list">
                    {
                        (this.state.searchedResults) ?
                            <div className="channel-menu search-menu">
                                <List>
                                    {
                                        (this.state.searchedResults).map((item) =>
                                            <div>
                                                <ListItem onClick={() => this.handleClick(item)}>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                    <ListItemText primary={item.channelName} secondary={"Taught by " + item.channelTeacher} color={'#'} />
                                                </ListItem>
                                            </div>
                                        )
                                    }
                                </List>
                            </div>
                            :
                            <div className="channel-menu list-menu">
                                <h3>Subscribed Channels</h3>
                                <div className="channel-menu subscribed">
                                    <List>
                                        {
                                            this.state.subscribedChannels.map((item) =>
                                                <div>
                                                    <ListItem
                                                        key={`channel_${item.channelId}`}
                                                        onClick={() => this.handleChannel(item)}>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                        <ListItemText primary={item.channelName} secondary={"Taught by " + item.channelTeacher} color={'#'} />
                                                    </ListItem>
                                                </div>
                                            )
                                        }
                                    </List>
                                </div>
                                <h3>Unsubscribed Channels</h3>
                                <div className="channel-menu unsubscribed">
                                    <List>
                                        {
                                            this.state.unsubscribedChannels.map((item) =>
                                                <ListItem
                                                    key={`channel_${item.channelId}`}
                                                    onClick={() => this.handleSubscribe(item)}
                                                >
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                    <ListItemText primary={item.channelName} secondary={"Taught by " + item.channelTeacher} />
                                                    <Button variant="fab" mini color="secondary" aria-label="Add">
                                                        <AddIcon />
                                                    </Button>
                                                </ListItem>
                                            )
                                        }
                                    </List>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default ChannelMenu;