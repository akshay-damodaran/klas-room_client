import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
// import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// import axios from 'axios';
import _ from 'lodash';
// import { Typography } from 'material-ui/styles/typography';

class ChannelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribedChannels: [{
                channelId: 3,
                isChannelActive: false,
                channelName: 'Sub1',
                channelTeacher: 'ABC'
            }, {
                channelId: 4,
                isChannelActive: false,
                channelName: 'Sub2',
                channelTeacher: 'BCD'
            }],
            unsubscribedChannels: [{
                channelId: 1,
                isChannelActive: true,
                channelName: 'Sub3',
                channelTeacher: 'CDE'
            }, {
                channelId: 2,
                isChannelActive: false,
                channelName: 'Sub4',
                channelTeacher: 'DEF'
            }],
            searchedResults: false
        }
    }

    componentWillMount() {
        // axios.post({
        //     url: '',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then((res) => {
        //     this.setState({
        //         subscribedChannels: res.data.subscribed,
        //         unsubscribedChannels: res.data.unsubscribed
        //     });
        // }).catch((err) => {
        //     console.log(err);
        // });
    }

    handleChannel(item) {
        this.props.setChannel(item);
    }

    handleSubscribe(item) {

    }

    handleInputChange(event) {
        const searchKeyword = event.target.value;
        if (searchKeyword.length > 0) {
            const allChannels = this.state.subscribedChannels.concat(this.state.unsubscribedChannels);
            const searchedResults = _.filter(allChannels, (o) => _.includes(o.channelName.toLowerCase(), searchKeyword.toLowerCase()));
            this.setState({ searchedResults });
        } else {
            this.setState({ searchedResults: false });
        }
    }

    render() {
        return (
            <div className="channel-menu">
                <div className="channel-menu profile">
                    <img src={require("../images/user-icon.svg")} className="channel-menu img" alt="" />
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
                                        (this.state.searchedResults.length > 0) ?
                                            (this.state.searchedResults).map((item) =>
                                                <div key={`search_${item.id}`}>
                                                    <ListItem onClick={() => this.handleClick(item)}>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                        <ListItemText primary={item.channelName} secondary={"Taught by " + item.channelTeacher} color={'#'} />
                                                    </ListItem>
                                                </div>
                                            )
                                            :
                                            <div>
                                                <ListItem>
                                                    <h3>{'No such subject available yet.'}</h3>
                                                </ListItem>
                                            </div>
                                    }
                                </List>
                            </div>
                            :
                            <div className="channel-menu list-menu">
                                <h3>Your Subjects</h3>
                                <div className="channel-menu subscribed">
                                    <List>
                                        {
                                            this.state.subscribedChannels.map((item) =>
                                                <div key={`channel_${item.channelId}`}>
                                                    <ListItem
                                                        onClick={() => this.handleChannel(item)}>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                        <ListItemText
                                                            classes={{ primary: '#133679' }}
                                                            primary={item.channelName} 
                                                            secondary={"Taught by " + item.channelTeacher}
                                                        />
                                                    </ListItem>
                                                </div>
                                            )
                                        }
                                    </List>
                                </div>
                                <h3>Add subjects to your list</h3>
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