import { axiosAuth } from './actions/axios';

// get the current user's ID

const getUserId = () => {
    //put function here
}

// add a thread

export const addThread = threadData => {
    return axiosAuth
    .post('/api/thread', {
        title: threadData.title,
        content: threadData.content,
        forum_id: threadData.forum_id,
        user_id: getUserId(),
    })
}

//get all the threads from the DB
export const getThreads = () => {
    return axiosAuth
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
    return axiosAuth
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
    return axiosAuth
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
    return axiosAuth
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