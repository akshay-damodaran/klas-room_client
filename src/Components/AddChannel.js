import React, { Component } from 'react';

class AddChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
      //   const { mitter } = this.props;
        return (
            <div className="channel-view">
                {'Add Channel'}
            </div>
        );
    }
}

export default AddChannel;