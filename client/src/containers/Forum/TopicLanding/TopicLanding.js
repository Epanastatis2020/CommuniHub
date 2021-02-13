import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { getThread } from '../../../services/ThreadService';
import { addPost, getSpecificPosts } from '../../../services/PostService';
import { getCurrentUserId } from '../../../services/UserService';
import { toast } from "react-toastify";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import ParentForum from '../../../components/Forum/ParentForum/ParentForum';
import Pagination from '../../../components/Pagination/Pagination';
import TopicStarter from '../../../components/Forum/TopicStarter/TopicStarter.js';
import Post from '../../../components/Forum/Post/Post';
import { isEmpty } from 'lodash';

const useStyles = makeStyles((theme) => ({
    button: {
      float: "right",
      width: 120,
    },
  }));

const TopicLanding = (props) => {

    const [replyMode, SetReplyMode] = useState(false);
    const [replyValue, SetReplyValue] = useState();
    const [loading, SetLoading] = useState(false);
    const [topicData, SetTopicData] = useState();
    const [posts, SetPosts] = useState();
    const [currentUser, SetCurrentUser] = useState()

    const classes = useStyles();
    
    useLayoutEffect(() => {

      const fetchCurrentUserID = async ()  => {
        const CurrentUserId = await getCurrentUserId().catch((err) => {
          console.log(err);
          toast.dark(err);
        })
        // console.log("CurrentUserID here", CurrentUserId)
        SetCurrentUser(CurrentUserId);
      };
  
      const fetchTopic = async () => {
        SetLoading(true);
        // console.log("THREAD ID BEING PASSED", props.thread_id)
        const TopicDataArray = await getThread(props.thread_id)
        // console.log("TOPIC DATA ARRAY", TopicDataArray);
        SetTopicData(TopicDataArray);
      };

      const fetchPosts = async () => {
        // console.log("THREAD ID USED FOR POST CALL", props.thread_id)
        const postData = await getSpecificPosts(props.thread_id)
        // console.log("THE POST DATA RETURNED IN THE USEEFFECT", postData)
        SetPosts(postData)
        SetLoading(false);
      };

      fetchCurrentUserID();
      fetchTopic();
      fetchPosts();
    }, []);

    const parentForum = {
        title: topicData?.title,
        // title: "TEST",
        image: 'https://rimh2.domainstatic.com.au/ATaM9ZUwi9t_p-g4UKcB9xslqi0=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/6e367c5b-353d-4583-b65a-6af2af82a4d8-w1440-h1200',
        imgText: topicData?.title,
        // imgText: "TEST"
    };

    const updateReplyValue = useCallback(({ target: { value }}) => {
      SetReplyValue(value);
    }, []);

    const handlePostSubmit = async(currentUser) => {
      SetLoading(true);
      let payload = {
        content: replyValue,
        thread_id: props.thread_id,
        user_id: currentUser,
        downvotes: "0",
        upvotes: "0"
      }
      // console.log("HANDLEPOSTSUBMIT PAYLOAD", payload)
      await addPost(payload).catch((err) => {
        console.log(err);
        toast.dark(err.message);
      })
      SetReplyMode(false);
      SetLoading(false);
      window.location.reload();
    }

    const replyBtnHandler = () => {
      replyMode? handlePostSubmit(currentUser) : SetReplyMode(true);
    };

    const postReplySection = (
      <Grid item xs={12} >
        <TextField
          id="content-label"
          label="Your Reply"
          style={{ margin: 8 }}
          placeholder="Write your reply here..."
          value={replyValue}
          onChange={updateReplyValue}
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    );

    return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <Grid container spacing={4}>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <ParentForum post={parentForum} />
              </Grid>
              <Grid item xs={9} >
                <Pagination />
              </Grid>
              <Grid item xs={3} >
                {loading ? <CircularProgress /> : 
                <Button 
                  onClick={replyBtnHandler} 
                  className={classes.button} 
                  size="medium" 
                  variant="contained" 
                  color="primary">
                {replyMode? "Post" : "Reply"}</Button>}
              </Grid>
              {!isEmpty(topicData)?  
              <Grid item xs={12}>
                <TopicStarter topic={topicData || []}/>
              </Grid> : ""}
              {replyMode? postReplySection :
              posts?.map(post => (
                  <Grid item xs={12} key={post._id}>
                    <Post 
                        author={post.user_id.name}
                        // author="TEST"
                        createdAt={post.createdAt} 
                        content={post.content} 
                        upvotes={post.upvotes} 
                        downvotes={post.downvotes} 
                        _id={post._id}
                        key={post._id}
                        thread_id={props.thread_id}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </main>
        </Container>
    </React.Fragment>
    );
};

export default TopicLanding;