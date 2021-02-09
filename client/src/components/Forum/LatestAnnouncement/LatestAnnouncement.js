import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 

const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function LatestAnnouncement(props) {
  const classes = useStyles();
  const { post } = props

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={post.title} className={classes.blue} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.dateStamp}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.postContent}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="a" href={props.postLink}>
          See in topic...
        </Typography>
      </CardContent>
    </Card>
  );
}