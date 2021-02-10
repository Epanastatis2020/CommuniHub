import React, { useState, useEffect } from 'react';
import { getThreads } from '../../../services/ThreadService';
import { getSpecificPosts } from '../../../services/PostService';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ParentForum from '../../../components/Forum/ParentForum/ParentForum';
import Pagination from '../../../components/Pagination/Pagination';
import TopicStarter from '../../../components/Forum/TopicStarter/TopicStarter.js';
import Post from '../../../components/Forum/Post/Post';

const useStyles = makeStyles((theme) => ({
    button: {
      float: "right",
      width: 120,
    },
  }));

const TopicLanding = (props) => {

    const classes = useStyles();    

    //dummy data to stand in for API call
    const topicData = {
        author: "CommuniHub Admin",
        title: "CommuniHub Test Topic",
        createdAt: "2021-02-08T09:37:54.510+00:00",
        content: "This is a test topic. This is to stand in for the real API call which will fetch actual topics with much better content than this stand-in topic."
    }

    //dummy data to stand in for API call
    const posts = [
        {
        content: "Pro-sumer software even dead cats bounce, nor optics and high touch client but circle back around. Dog and pony show workflow ecosystem are there any leftovers in the kitchen? so low engagement core competencies. When does this sunset? productize, but 60% to 30% is a lot of persent, and i don't want to drain the whole swamp, i just want to shoot some alligators. Quarterly sales are at an all-time low market-facing powerPointless. I’ve been doing some research this morning and we need to better. Low-hanging fruit everyone thinks the soup tastes better after they’ve pissed in it get buy-in nor feature creep this medium needs to be more dynamic. We want to see more charts anti-pattern. What are the expectations pushback, so core competencies it is all exactly as i said, but i don't like it nor low-hanging fruit flesh that out. A set of certitudes based on deductions founded on false premise run it up the flag pole. Due diligence offline this discussion on-brand but completeley fresh, pig in a python out of the loop. Scope creep you better eat a reality sandwich before you walk back in that boardroom. We need to touch base off-line before we fire the new ux experience.",
        _id: "093khfaskdfjasklf203",
        author: "908908fsadkhfjsaldkfj",
        createdAt: "2021-02-08T09:37:54.510+00:00",
        updatedAt: "2021-02-08T11:50:10.510+00:00",
        upvotes: 5,
        downvotes: 0
    },
    {
        content: "Social currency digital literacy driving the initiative forward we should leverage existing asserts that ladder up to the message for quantity obviously high turnaround rate. Low engagement talk to the slides or closing these latest prospects is like putting socks on an octopus, nor optics or start procrastinating 2 hours get to do work while procrastinating open book pretend to read while manager stands and watches silently nobody is looking quick do your web search manager caught you and you are fured so you must be muted yet golden goose.",
        _id: "908908fsadkhfjsaldkfj",
        author: "093khfaskdfjasklf203",
        createdAt: "2021-02-08T09:37:54.510+00:00",
        updatedAt: "2021-02-08T11:50:10.510+00:00",
        upvotes: 0,
        downvotes: 0
    },
    {
        content: "Hire the best blue sky thinking, or let me know if you need me to crack any skulls so crank this out, for this vendor is incompetent or deploy, nor overcome key issues to meet key milestones. Both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say we’re ditching the business model get buy-in yet not the long pole in my tent, and table the discussion . Prioritize these line items turd polishing. Quantity high turnaround rate, fast track hire the best not the long pole in my tent. That's mint, well done optimize for search baseline ultimate measure of success quick win. Personal development drive awareness to increase engagement yet throughput.",
        _id: "093khfaskdfjasklf203",
        author: "908908fsadkhfjsaldkfj",
        createdAt: "2021-02-08T09:37:54.510+00:00",
        updatedAt: "2021-02-08T11:50:10.510+00:00",
        upvotes: 10,
        downvotes: 6
    },
    {
        content: "Time vampire baseline. We need to have a Come to Jesus meeting with Phil about his attitude timeframe, yet can we align on lunch orders. Groom the backlog. Time to open the kimono what about scaling components to a global audience? but ultimate measure of success. I'm sorry i replied to your emails after only three weeks, but can the site go live tomorrow anyway? window-licker. Clear blue water teams were able to drive adoption and awareness, but waste of resources, for run it up the flagpole but what's the real problem we're trying to solve here?.",
        _id: "093khfaskdfjasklf203",
        author: "908908fsadkhfjsaldkfj",
        createdAt: "2021-02-08T09:37:54.510+00:00",
        updatedAt: "2021-02-08T11:50:10.510+00:00",
        upvotes: 1,
        downvotes: 3
    }
];

    // const [postData, SetPostData] = useState(posts);

    const parentForum = {
        title: topicData.title,
        image: 'https://rimh2.domainstatic.com.au/ATaM9ZUwi9t_p-g4UKcB9xslqi0=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/6e367c5b-353d-4583-b65a-6af2af82a4d8-w1440-h1200',
        imgText: topicData.title,
    };

    // const PostComponents = (data) => {
    //     data.forEach((post) => {
    //         return  <Grid item xs={12}>
    //                     <Post postProp={post} />
    //                 </Grid>
    //     })
    // };

    // console.log(PostComponents);

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
                <Button className={classes.button} size="medium" variant="contained" color="primary">Reply</Button>
              </Grid>
              <Grid item xs={12}>
                <TopicStarter topic={topicData}/>
              </Grid>
              {posts.map(post => (
                  <Grid item xs={12}>
                    <Post 
                        author={post.author} 
                        createdAt={post.createdAt} 
                        content={post.content} 
                        upvotes={post.upvotes} 
                        downvotes={post.downvotes} 
                    />
                  </Grid>
              ))}
            </Grid>
          </main>
        </Container>
    </React.Fragment>
    );
};

export default TopicLanding;