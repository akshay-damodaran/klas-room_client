import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import _ from 'lodash';

import ChannelView from '../Components/ChannelView';
import AddChannel from '../Components/AddChannel';
import Profile from '../Components/Profile';
import Settings from '../Components/Settings';
import NotificationsView from '../Components/NotificationsView';

const drawerWidth = 300;
const appBarHeight = 65;
const height = window.innerHeight;

const styles = theme => ({
    root: {
        backgroundColor: '#000',
        flexGrow: 1,
        height,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        height: appBarHeight,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        height,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        // width: '100%',
        paddingTop: appBarHeight,
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing.unit * 3,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    usericon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: drawerWidth,
        height: 150
    },
    bigAvatar: {
        width: 100,
        height: 100,
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            anchorEl: null,
            mobileMoreAnchorEl: null,
            subjectList: [{
                id: 112,
                menuIcon: <ChromeReaderModeIcon />,
                subjectName: 'Data Structures',
                teacherName: 'R. K. Hyde'
            }, {
                id: 113,
                menuIcon: <ChromeReaderModeIcon />,
                subjectName: 'Algorithms & Complexity',
                teacherName: 'R. K. Hyde'
            }],
            contentView: {
                name: 'addChannel'
            },
            selectedSubject: 112,
            searchedResults: false
        };
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    setContentView(component, item, index) {
        this.setState({
            contentView: { name: component, item },
            mobileOpen: (this.state.mobileMoreAnchorEl) && !this.state.mobileOpen,
            selectedSubject: (component === 'channelView') ? index : this.state.seleselectedSubjectctedIndex
        });
    }

    handleSearch(event) {
        const searchKeyword = event.target.value;
        if (searchKeyword.length > 0) {
            // const allChannels = this.state.subscribedChannels.concat(this.state.unsubscribedChannels);
            const allChannels = this.state.subjectList;
            const searchedResults = _.filter(allChannels, (o) => _.includes(o.subjectName.toLowerCase(), searchKeyword.toLowerCase()));
            this.setState({ searchedResults });
        } else {
            this.setState({ searchedResults: false });
        }
    }

    renderContent() {
        switch (this.state.contentView.name) {
            case 'channelView': {
                return (
                    <ChannelView
                        channelInfo={this.state.contentView.item}
                    />
                );
            }
            case 'profile': {
                return (
                    <Profile />
                );
            }
            case 'settings': {
                return (
                    <Settings />
                );
            }
            case 'notificationsView': {
                return (
                    <NotificationsView />
                );
            }
            case 'addChannel': {
                return (
                    <AddChannel />
                );
            }
            default: {
                return null;
            }
        }
    }

    render() {
        const { classes, theme } = this.props;
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <div className={classes.usericon}>
                    <Avatar
                        alt="User Icon"
                        src={require("../images/user-icon.svg")}
                        className={classes.bigAvatar}
                    />
                </div>
                <Divider />
                <List>
                    <div>
                        <ListItem button onClick={() => this.setContentView('addChannel')}>
                            <ListItemIcon>
                                <ChromeReaderModeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Add Subject"} />
                            <Button>
                                <AddCircleIcon />
                            </Button>
                        </ListItem>
                        <Divider />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search subjects.."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                // value={this.state.searchValue}
                                onChange={(e) => this.handleSearch(e)}
                            />
                        </div>
                        <Divider />
                        {
                            (this.state.searchedResults) ?
                                (this.state.searchedResults.length > 0) ?
                                    this.state.searchedResults.map((item, i) =>
                                        <div key={`subjectItem${i}`}>
                                            <ListItem
                                                button
                                                selected={this.state.selectedSubject === item.id}
                                                onClick={() => this.setContentView('channelView', item, i)}>
                                                <ListItemIcon>
                                                    {item.menuIcon}
                                                </ListItemIcon>
                                                <ListItemText primary={item.subjectName} secondary={item.teacherName} />
                                            </ListItem>
                                            <Divider />
                                        </div>
                                    )
                                    :
                                    <h4 style={{ paddingLeft: 16, paddingRight: 16 }}>{'No such subject available..'}</h4>                           
                                :
                                this.state.subjectList.map((item, i) =>
                                    <div key={`subjectItem${i}`}>
                                        <ListItem
                                            button
                                            selected={this.state.selectedSubject === item.id}
                                            onClick={() => this.setContentView('channelView', item, i)}>
                                            <ListItemIcon>
                                                {item.menuIcon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.subjectName} secondary={item.teacherName} />
                                        </ListItem>
                                        <Divider />
                                    </div>
                                )
                        }
                    </div>
                </List>
            </div>
        );

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={11} color="secondary" onClick={() => this.setContentView('notificationsView')}>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classNames(classes.toolbar)}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="headline" color="inherit" noWrap>
                            <b>Klas-room</b>
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <Badge className={classes.margin} badgeContent={17} color="secondary" onClick={() => this.setContentView('notificationsView')}>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : null}
                                aria-haspopup="true"
                                // onClick={this.handleProfileMenuOpen}
                                onClick={() => this.setContentView('profile')}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {
                        this.renderContent()
                    }
                </main>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
