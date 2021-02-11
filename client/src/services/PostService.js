import { axiosAuth } from './actions/axios';
import { getCurrentUserId } from './UserService';

// add a post

export const addPost = postData => {
    return axiosAuth
    .post('/post', {
        content: postData.content,
        thread_id: postData.thread_id,
        user_id: getCurrentUserId(),
    })
}

//get all the posts from the DB
export const getPosts = () => {
    return axiosAuth
    .get('/post', {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

//get all posts from a specific thread/topic
export const getSpecificPosts = (threadId) => {
    return axiosAuth
    .get('/posts/' + threadId, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

//get a specific post from the DB
export const getPost = (postID) => {
    return axiosAuth
    .get('/post/' + postID, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// delete a post from the DB
export const deletePost = postID => {
    return axiosAuth
    .delete("/post/" + postID, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

// updating a post name

export const updatePost = postData => {
    return axiosAuth
    .put("/post/" + postData._id, {
        content: postData.content,
        thread_id: postData.thread_id,
        upvotes: postData.upvotes,
        downvotes: postData.downvotes,
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })

}