import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

import { addThread } from '../../services/ThreadService';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import ParentForum from '../../components/Forum/ParentForum/ParentForum';

const useStyles = makeStyles((theme) => ({
    button: {
      float: "right",
      width: 120,
    },
  }));

const NewTopic = (props) => {

    const classes = useStyles();

    const history = useHistory();

    const [loading, SetLoading] = useState(false);
    const [threadData, SetThreadData] = useState({
      title: '',
      content: '',
      errors: {},
    })

    const onChange = (event) => {
      SetThreadData({ ...threadData, [event.target.name]: event.target.value});
    };

    const parentForum = {
        title: "CREATE A NEW TOPIC",
        // title: "TEST",
        image: 'https://rimh2.domainstatic.com.au/ATaM9ZUwi9t_p-g4UKcB9xslqi0=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/6e367c5b-353d-4583-b65a-6af2af82a4d8-w1440-h1200',
        imgText: "Generic building image",
        // imgText: "TEST"
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      SetLoading(true);
      console.log("CREATE TOPIC THREAD DATA", threadData);
      let payload = {
        title: threadData.title,
        content: threadData.content,
      }
      try {
        const newThread = await addThread(payload)
        const pushURL = "/topic/" + newThread._id
        history.push(pushURL);
      } catch (err) {
        toast.dark(err);
        SetLoading(false);
      }
    };

    const SubmitBtn = () => {
      return (
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        CREATE TOPIC
      </Button>)
    };

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
            </Grid>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="title"
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    onChange={onChange}
                    required
                    value={threadData.title}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="content"
                    fullWidth
                    id="content"
                    label="Content"
                    name="content"
                    onChange={onChange}
                    required
                    value={threadData.content}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} />
              </Grid>
              {loading ? <CircularProgress /> : <SubmitBtn />}
            </form>
          </main>
        </Container>
    </React.Fragment>
    );
};

export default NewTopic;