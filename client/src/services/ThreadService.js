import { axiosAuth } from './actions/axios';
import { getCurrentUserId } from './UserService';


// add a thread

export const addThread = threadData => {
    return axiosAuth
    .post('/thread', {
        title: threadData.title,
        content: threadData.content,
        forum_id: "602103b0764a2a3b3caa21a2",
        user_id: threadData.user_id,
    })
}

//get all the threads from the DB
export const getThreads = () => {
    return axiosAuth
    .get('/thread', {
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
    .get('/thread/' + threadID, {
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
    .delete("/thread/" + threadID, {
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
    .put("/thread/" + threadData._id, {
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