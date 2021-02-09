import React, { useState, useEffect } from 'react';
import { getThreads } from '../../../services/ThreadService';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import ParentForum from '../../../components/Forum/ParentForum/ParentForum';
import FeaturedPost from '../../../components/Forum/FeaturedPost/FeaturedPost';
import Footer from '../../../components/Footer/Footer';
import LatestAnnouncement from '../../../components/Forum/LatestAnnouncement/LatestAnnouncement';
import SearchBox from '../../../components/SearchBox/SearchBox';
import Pagination from '../../../components/Pagination/Pagination';
import TopicTable from '../../../components/Forum/TopicTable/TopicTable';

const parentForum = {
  title: 'Midtown - 49-51 Denison St Wollongong',
  image: 'https://rimh2.domainstatic.com.au/ATaM9ZUwi9t_p-g4UKcB9xslqi0=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/6e367c5b-353d-4583-b65a-6af2af82a4d8-w1440-h1200',
  imgText: 'Midtown building',
};

const latestAnnouncement = {
  title: 'CommuniHub Admin',
  dateStamp: 'Feb 09, 2021',
  postLink: '#',
  postContent: 'Just a reminder that this forum is still under construction and not all functionality is present or working'
};

const featuredPost = {
  title: 'Ali Shaikh',
  dateStamp: 'Feb 09, 2021',
  postLink: '#',
  postContent: 'Wow I cannot believe how quickly this forum is coming together. Anyone else?'
};



export default function ForumLanding() {
  
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [topicsPerPage, setTopicsPerPage] = useState(5);

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      const res = await getThreads();
      setTopics(res.data);
      setLoading(false);
    }

    fetchTopics();
  }, []);

  console.log(topics);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ParentForum post={parentForum} />
            </Grid>
            <Grid item xs={6} s={6}>
              <LatestAnnouncement post={latestAnnouncement} />
            </Grid>
            <Grid item xs={6} s={6}>
              <FeaturedPost post={featuredPost} />
            </Grid>
            <Grid item xs={10} s={9}>
              <SearchBox />
            </Grid>
            <Grid item xs={2} s={3}>
              <Button variant="contained" color="primary"><SearchIcon /></Button>
            </Grid>
            <Grid item xs={10} s={9}>
              <Pagination />
            </Grid>
            <Grid item xs={2} s={3}>
            <Button variant="contained" color="primary">New Topic</Button>
            </Grid>
            <Grid item xs={12}>
              <TopicTable />
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}