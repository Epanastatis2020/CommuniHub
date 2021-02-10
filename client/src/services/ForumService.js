import { axiosAuth } from './actions/axios';

// add a forum

export const addForum = forumData => {
    return axiosAuth
    .post('/forum', {
        forum_name: forumData.forum_name,
    })
}

//get all the forums in the DB
export const getForumList = () => {
    return axiosAuth
    .get('/forum', {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// delete a forum from the DB
export const deleteForum = forumId => {
    return axiosAuth
    .delete("/forum/" + forumId, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// updating a forum name

export const updateForum = forumData => {
    return axiosAuth
    .put("/forum/" + forumData._id, {
        forum_name: forumData.forum_name,
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })

}