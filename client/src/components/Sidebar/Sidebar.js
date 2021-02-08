import React from 'react';
import { useHistory } from 'react-router-dom';

//mUI imports
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/Inbox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleDashboard = () => {
    history.push("/dashboard")
  }

  const handleInbox = () => {
    history.push("/inbox")
  }

  const handleCalendar = () => {
    history.push("/calendar")
  }

  const handleLibrary = () => {
    history.push("/library")
  }
  
  return (
    <Drawer
        className={classes.drawer}
        anchor="left"
        onClose={props.toggleClose}
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button key="Dashboard" onClick={handleDashboard}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
          <ListItem button key="Inbox" onClick={handleInbox}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox"/>
          </ListItem>
          <ListItem button key="Calendar" onClick={handleCalendar}>
            <ListItemIcon><DateRangeIcon /></ListItemIcon>
            <ListItemText primary="Calendar"/>
          </ListItem>
          <ListItem button key="Library" onClick={handleLibrary}>
            <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary="Library"/>
          </ListItem>
        </List>
    </Drawer>
  );
}
