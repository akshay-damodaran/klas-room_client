import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ChatView from './ChatView';
import AssignmentsView from './AssignmentsView';
import { Button } from '@material-ui/core';

class ChannelView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelInfo: this.props.channelInfo,
            selected: 0,
            menuOptions: [{
                id: 0,
                name: 'Chat'
            }, {
                id: 1,
                name: 'Assignments'
            }],
            notifications: false
        }
    }

    componentWillReceiveProps(state, nextProps) {
        this.setState({ channelInfo: state.channelInfo });
    }

    handleNotifications() {
        this.setState({ notifications: true });
    }

    render() {
        const { mitter } = this.props;
        return (
            <div className="channel-view">
                {
                    (this.state.channelInfo) ?
                        <div className="channel-view display">
                            <div className="channel-view info">
                                <List>
                                    <ListItem>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        <ListItemText primary={this.state.channelInfo.channelName} secondary={"Taught by " + this.state.channelInfo.channelTeacher} color={'#'} />
                                        <Button onClick={() => this.handleNotifications()}>
                                            <NotificationsActive className="channel-view notification" />
                                        </Button>
                                    </ListItem>
                                </List>
                            </div>
                            {
                                (this.state.notifications) ?
                                    <div className="channel-view notifications">
                                        <h1>NotificationsActive</h1>
                                    </div>
                                :
                                    <div className="channel-view horizontal-menu">
                                        <AppBar position="static" color="default">
                                            <Tabs
                                                value={this.state.selected}
                                                onChange={this.handleChange}
                                                indicatorColor="primary"
                                                textColor="primary"
                                                fullWidth
                                            >
                                                {
                                                    this.state.menuOptions.map((item) =>
                                                        <Tab
                                                            key={`tab_${item.id}`}
                                                            label={item.name}
                                                            onClick={() => this.setState({ selected: item.id })}
                                                        />
                                                    )
                                                }
                                            </Tabs>
                                        </AppBar>
                                        {
                                            (this.state.selected === 0) ?
                                                <div className="channel-view chat">
                                                    <ChatView
                                                        mitter={mitter}
                                                    />
                                                </div>
                                                :
                                                <div className="channel-view assignments">
                                                    <AssignmentsView />
                                                </div>
                                        }
                                    </div> 
                            }
                        </div>
                        :
                        <div className="channel-view homepage">
                            <h1>{'Hi stay connected to internet'}</h1>
                        </div>
                }
            </div>
        );
    }
}

export default ChannelView;