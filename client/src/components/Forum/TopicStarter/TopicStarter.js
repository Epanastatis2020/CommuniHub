import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const useStyles = makeStyles((theme) => ({
    root: {
      height: 200,
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
            <Avatar alt={topic.author} className={classes.blue} />
          }
        title={topic.title}
        subheader={topic.createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {topic.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownAltIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}