import axios from 'axios';

// get the current user's ID

const getUserId = () => {
    //put function here
}

// add a thread

export const addThread = threadData => {
    return axios
    .post('/api/thread', {
        title: threadData.title,
        content: threadData.content,
        forum_id: threadData.forum_id,
        user_id: getUserId(),
    })
}

//get all the threads from the DB
export const getThreads = () => {
    return axios
    .get('/api/thread', {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

//get a specific thread from the DB
export const getThread = (threadID) => {
    return axios
    .get('/api/thread/' + threadID, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// delete a thread from the DB
export const deleteThread = threadID => {
    return axios
    .delete("/api/thread/" + threadID, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// updating a thread name

export const updateThread = threadData => {
    return axios
    .put("/api/thread/" + threadData._id, {
        title: threadData.title,
        content: threadData.content,
        forum_id: threadData.forum_id,
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })

}