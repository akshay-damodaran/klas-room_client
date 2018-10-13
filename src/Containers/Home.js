import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChannelMenu from '../Components/ChannelMenu';
import ChannelView from '../Components/ChannelView';
import '../styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelInfo: false
        }
        this.setChannel = this.setChannel.bind(this);
    }

    setChannel(channelInfo) {
        this.setState({ channelInfo });
    }

    render() {
        const {mitter} = this.props;
        return (
            <div className="home">
                <div className="home channel-menu">
                    <ChannelMenu
                        setChannel={(channelInfo) => this.setChannel(channelInfo)}
                    />
                </div>
                <div className="home channel-view">
                    <ChannelView
                        channelInfo={this.state.channelInfo}
                        mitter={mitter}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.loginReducer.user,
  });
  
  const mapDispatchToProps = dispatch => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);