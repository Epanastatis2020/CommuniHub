import React from 'react';
import { useParams } from 'react-router';
import TopicLanding from '../../containers/Forum/TopicLanding/TopicLanding';

const ViewTopic = () => {

    //grab the thread id from the url
    const params = useParams();

    return (
        <TopicLanding thread_id={params.id}/>
    );
};

export default ViewTopic;