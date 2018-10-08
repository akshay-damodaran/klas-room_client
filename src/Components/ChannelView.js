import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import { Button } from '@material-ui/core';

class ChannelView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelInfo: this.props.channelInfo,
            selected: 'Chat',
            menuOptions: [{
                id: 1,
                name: 'Chat'
            }, {
                id: 2,
                name: 'Assignments'
            }]
        }
    }

    componentWillReceiveProps(state, nextProps) {
        this.setState({ channelInfo: state.channelInfo });
    }

    render() {
        return (
            <div className="channel-view">
                <div className="channel-view info">
                    {
                        (this.state.channelInfo) ?
                            <div className="channel-view display">
                                <div>
                                    <List>
                                        <ListItem onClick={() => this.handleClick(this.state.channelInfo)}>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            <ListItemText primary={this.state.channelInfo.channelName} secondary={"Taught by " + this.state.channelInfo.channelTeacher} color={'#'} />
                                            <NotificationsActive className="channel-view notification" />
                                        </ListItem>
                                    </List>
                                </div>
                                <div className="channel-view horizontal-menu">
                                    {
                                        this.state.menuOptions.map((item) =>
                                            <Button
                                                primary={item.name}
                                            >
                                            {item.name}
                                            </Button>
                                        )
                                    }
                                </div>
                            </div>
                            :
                            <div className="channel-view homepage">
                                <h1>{'Hi stay connected to internet'}</h1>
                            </div>
                    }
                </div>
                <div className="channel-view chatview">
                </div>
            </div>
        );
    }
}

export default ChannelView;