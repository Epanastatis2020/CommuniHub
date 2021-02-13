import {React, useState, useEffect} from 'react';
import { updatePost, deletePost } from '../../../services/PostService';
import { getCurrentUserId } from '../../../services/UserService';

import { toast } from "react-toastify";
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "auto",
    },
    avatar: {
      backgroundColor: blue[500],
    },
    deleteBtn: {
      marginLeft: 'auto',
    }
  }));

export default function Post(props) {
  const classes = useStyles();

  const [loading, SetLoading] = useState(false)
  const [upvotes, SetUpvotes] = useState(props.upvotes)
  const [downvotes, SetDownvotes] = useState(props.downvotes)
  const [currentUser, SetCurrentUser] = useState()

  useEffect(() => {

    const fetchCurrentUserID = async ()  => {
      const CurrentUserId = await getCurrentUserId().catch((err) => {
        console.log(err);
        toast.dark(err);
      })
      // console.log("CurrentUserID here", CurrentUserId)
      SetCurrentUser(CurrentUserId);
    };

    fetchCurrentUserID();
  }, []);

  const upvoteHandler = (e) => {
    e.preventDefault();
    SetLoading(true)
    let currentUpvotes = upvotes;
    SetUpvotes(currentUpvotes + 1)
    console.log("CURRENT UPDATED UPVOTES", upvotes);
    console.log("THREAD ID INSIDE UPVOTE HANDLER", props.thread_id)
    const postData = {
      _id: props._id,
      content: props.content,
      thread_id: props.thread_id,
      upvotes: currentUpvotes + 1,
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
      downvotes: currentDownvotes + 1,
    }
    updatePost(postData)
    SetLoading(false)    
  }

  const deletePostHandler = async (e) => {
    e.preventDefault();
    SetLoading(true);
    await deletePost(props._id).catch((err) => {
      console.log(err);
      toast.dark(err.message);
    });
    SetLoading(false)
    window.location.reload();
  };

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
        {props.user_id._id === currentUser ? 
        <IconButton aria-label="delete" onClick={deletePostHandler} className={classes.deleteBtn}>
          <DeleteForeverIcon color="secondary" />
        </IconButton> : <IconButton />}
      </CardActions>
      }
    </Card>
  );
}