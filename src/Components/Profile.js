import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    profile: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100,
        flexDirection: 'column'
    },
    profileimage: {
        width: 200,
        height: 200,
        backgroundColor: '#1339b7'
    },
    paper: {
        width: '70%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileInfo: {
                Name: 'R. K. Hyde',
                "Email Address": 'rkhyde@mitter.com',
                Address: 'J.K. Street, Belllington, California'
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.profile}>
                <Avatar className={classes.profileimage}>
                    <AccountCircle className={classes.profileimage} />
                </Avatar>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Attribute</TableCell>
                                <TableCell>Information</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Object.entries(this.state.profileInfo).map(([key, value], i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                {key}
                                            </TableCell>
                                            <TableCell >{value.toString()}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Profile);