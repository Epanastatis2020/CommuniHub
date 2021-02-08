import axios from 'axios';

// add a forum

export const addForum = forumData => {
    return axios
    .post('/api/forum', {
        forum_name: forumData.forum_name,
    })
}

//get all the forums in the DB
export const getForumList = () => {
    return axios
    .get('/api/forum', {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// delete a forum from the DB
export const deleteForum = forumID => {
    return axios
    .delete("/api/forum/" + forumID, {
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
    return axios
    .put("/api/forum/" + forumData._id, {
        forum_name: forumData.forum_name,
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })

}