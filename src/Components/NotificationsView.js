import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import '../styles/NotificationsView.css';

class NotificationsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [{
                id: 0,
                notificationTitle: 'Welcome',
                notificationMessage: 'Welcome to your Subject'
            }, {
                id: 1,
                notificationTitle: 'Assigment Due',
                notificationMessage: 'Your assignment is due on 15/08/2018'
            }]
        }
    }

    render() {
        return (
            <div className="notifications-view">
                <div className="notifications-view back">
                    <Button onClick={() => this.props.handleNotifications()}>
                        <Avatar>
                            <ArrowBackIcon/>
                        </Avatar>
                    </Button>
                </div>
                {
                    this.state.notifications.map((item) =>
                        <div key={`notification_${item.id}`} className="notifications-view card-item">
                            <Card>
                                <CardContent>
                                    <b>{item.notificationTitle}</b>
                                    <hr/>
                                </CardContent>
                                <CardContent>
                                    {item.notificationMessage}
                                </CardContent>
                            </Card>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default NotificationsView;