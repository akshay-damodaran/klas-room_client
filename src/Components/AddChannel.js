import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

const styles = theme => ({
    addchannel: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#e6e6e6'
    },
    paper: {
        padding: theme.spacing.unit * 1,
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: '95%'
    },
    heading: {
        backgroundColor: '#e6e6e6',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


class AddChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleChange(e) {

    }

    render() {
        const { classes } = this.props;
        // const { mitter } = this.props;
        return (
            <div className={classes.addchannel}>
                <Paper className={classes.paper}>
                    <List className={classes.heading}>
                        <ListItem>
                            <ListItemIcon>
                                <ChromeReaderModeIcon />
                            </ListItemIcon>
                            {'Add Channel'}
                        </ListItem>
                    </List>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Channel Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </form>
                </Paper>
            </div>
        );
    }
}

AddChannel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddChannel);