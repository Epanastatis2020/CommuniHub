import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "auto",
    },
    avatar: {
      backgroundColor: blue[500],
    },
  }));

export default function TopicStarter(props) {
  const classes = useStyles();
  const { topic } = props

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt={topic.title} className={classes.blue} />
          }
        title={topic.title}
        subheader={topic.createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {topic.content}
        </Typography>
      </CardContent>
    </Card>
  );
}