import React, { useState, useEffect } from 'react';
import { getThreads } from '../../../services/ThreadService';
import { getSpecificPosts } from '../../../services/PostService';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ParentForum from '../../../components/Forum/ParentForum/ParentForum';
import Pagination from '../../../components/Pagination/Pagination';
import TopicStarter from '../../../components/Forum/TopicStarter/TopicStarter';
import Post from '../../../components/Forum/Post/Post';

const TopicLanding = (props) => {

    const parentForum = {
        title: props.title,
        image: '#',
        imgText: props.title,
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
              <Grid item xs={10} >
                <Pagination />
              </Grid>
              <Grid item xs={2} >
                <Button />
              </Grid>
              <Grid item xs={12}>
                <TopicStarter />
              </Grid>
              <Grid item xs={12}>
                {/* Function to loop through posts and render */}
              </Grid>
            </Grid>
          </main>
        </Container>
    </React.Fragment>
    );
};

export default TopicLanding;