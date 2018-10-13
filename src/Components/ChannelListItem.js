import React, {Component} from 'react';

class ChannelListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: this.props.channelInfo
        }
    }

    render() {
        return (
            <div className="channel-list-item">
                <img src={require("../images/user-icon.svg")} className="channel-list-item profile" height="50" width="50" />
                <h3>{this.state.channel.channelName}</h3>
                <h5>{this.state.channel.channelTeacher}</h5>
            </div>
        )
    }
}

export default ChannelListItem;