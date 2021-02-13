import {React, useState} from 'react';
import { updatePost } from '../../../services/PostService';

import * as timeago from 'timeago.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "auto",
    },
    avatar: {
      backgroundColor: blue[500],
    },
  }));

export default function Post(props) {
  const classes = useStyles();

  const [loading, SetLoading] = useState(false)
  const [upvotes, SetUpvotes] = useState(props.upvotes)
  const [downvotes, SetDownvotes] = useState(props.downvotes)

  const upvoteHandler = (e) => {
    e.preventDefault();
    SetLoading(true)
    let currentUpvotes = upvotes;
    SetUpvotes(currentUpvotes + 1)
    const postData = {
      _id: props._id,
      content: props.content,
      thread_id: props.thread_id,
      upvotes: upvotes,
      downvotes: props.downvotes,
    }
    updatePost(postData)
    SetLoading(false)    
  }
  
  const downvoteHandler = (e) => {
    e.preventDefault();
    SetLoading(true)
    let currentDownvotes = downvotes;
    SetDownvotes(currentDownvotes + 1)
    const postData = {
      _id: props._id,
      content: props.content,
      thread_id: props.thread_id,
      upvotes: props.upvotes,
      downvotes: downvotes,
    }
    updatePost(postData)
    SetLoading(false)    
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt={props.author} className={classes.blue} />
          }
        title={props.author}
        subheader={timeago.format(props.createdAt)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
      {loading ? <CircularProgress /> :
      <CardActions disableSpacing>
        <IconButton aria-label="upvote" onClick={upvoteHandler}>
          <ThumbUpAltIcon color="inherit"/>
          <Typography variant="caption">{upvotes}</Typography>
        </IconButton>
        <IconButton aria-label="downvote" onClick={downvoteHandler}>
          <ThumbDownAltIcon color="error"/>
          <Typography variant="caption" color="error">{downvotes}</Typography>
        </IconButton>
      </CardActions>
      }
    </Card>
  );
}