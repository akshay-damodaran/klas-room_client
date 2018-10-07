import React, {Component} from 'react';

class ChannelView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="channel-view">
                <div className="channel-view info">
                    <img src={require("../images/user-icon.svg")} width="50" height="50"/> 
                </div>
                <div className="channel-view chatview">
                </div>
            </div>
        );
    }
}

export default ChannelView;