import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ChatView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessages: [{
                message: {
                    id: 0,
                    messageId: 'hi',
                    senderId: {
                        identifier: 0,
                        name: 'Jack'
                    },
                    textPayload: 'Hi'
                }
            }, {
                message: {
                    id: 1,
                    messageId: 'hi',
                    senderId: {
                        identifier: 1,
                        name: 'Jane'
                    },
                    textPayload: 'Hello'
                }
            }],
            typedMessage: ''
        }
    }

    componentWillMount() {

    }

    renderMessages() {
        if (this.state.activeChannel === null) {
            return <div></div>
        }

        // const activeChannelMessages = this.props.channelMessages[this.state.activeChannel]
        const activeChannelMessages = this.state.chatMessages;

        return activeChannelMessages.map(message => {
            const isSelfMessage = this.props.selfUserId === message.senderId.identifier

            return (
                <div key={message.messageId} className={'message' + (isSelfMessage ? ' self' : '')}>
                    <div className='message-block'>
                        <span className='sender'>{message.senderId.name}</span>

                        <div className='message-content'>
                            {message.textPayload}
                        </div>
                    </div>
                </div>
            )
        })
    }

    sendMessage() {
        const mitter = this.props.mitter
        const messageToSend = this.state.typedMessage
        const privateMessagePattern = /^(@[a-zA-Z0-9]+)/
        const privateMessageMatch = messageToSend.match(privateMessagePattern)
        let appliedAcls = null

        if (privateMessageMatch !== null) {
            appliedAcls = {
                plusAppliedAcls: [`read_message:user(${mitter.me().identifier})`, `read_message:user(${privateMessageMatch[0]})`]
            }
        }

        this.setState((prevState) => Object.assign({}, prevState, {
            typedMessage: ''
        }))

        // this.messageInput.focus();

        mitter.clients().messages()
            .sendMessage(this.state.activeChannel, {
                senderId: mitter.me(),
                textPayload: this.state.typedMessage,
                timelineEvents: [
                    {
                        type: "mitter.mtet.SentTime",
                        eventTimeMs: new Date().getTime(),
                        subject: mitter.me()
                    }
                ],
                appliedAcls: appliedAcls
            })
    }

    updateTypedMessage(evt) {
        const value = evt.target.value
        this.setState((prevState) => {
            return Object.assign({}, prevState, {
                typedMessage: value
            })
        })
    }

    render() {
        return (
            <div className="chat-view">
                <div className="chat-view chat-messages">
                    {
                        this.state.chatMessages.map((item) =>
                            <div key={item.message.id} className={`chat-view message`}>
                                <Card className={`chat-view message${item.message.senderId.identifier}`}>
                                    <CardContent>
                                        <b>{item.message.senderId.name}</b>
                                        <hr />
                                    </CardContent>
                                    <CardContent>
                                        {item.message.textPayload}
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    }
                </div>
                <div className="chat-view chat-dialog">
                    <input className="chat-view chat-input" type="text" onChange={(e) => this.updateTypedMessage(e)} />
                    <Button onClick={() => this.sendMessage()}>Send</Button>
                </div>
            </div>
        );
    }
}

export default ChatView;