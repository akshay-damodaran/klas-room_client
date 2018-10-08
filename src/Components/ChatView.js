import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class ChatView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessages: [{
                id: 0,
                message: 'hi'
            }]
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="chat-view">
                <div className="chat-view chat-messages">
                    {
                        this.state.chatMessages.map((item) =>
                            <div className="chat-view chat-message" key={`chat_${item.id}`}>
                                <h4>{item.message}</h4>
                            </div>
                        )
                    }
                </div>
                <div className="chat-view chat-dialog">
                    <input className="chat-view chat-input" type="text" />
                    <Button>Send</Button>
                </div>
            </div>
        );
    }
}

export default ChatView;