import axios from 'axios';

// get the current user's ID

const getUserId = () => {
    //put function here
}

// add a post

export const addPost = postData => {
    return axios
    .post('/api/post', {
        content: postData.content,
        thread_id: postData.thread_id,
        user_id: getUserId(),
    })
}

//get all the posts from the DB
export const getPosts = () => {
    return axios
    .get('/api/post', {
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
    return axios
    .get('/api/post/' + postID, {
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
    return axios
    .delete("/api/post/" + postID, {
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
    return axios
    .put("/api/post/" + postData._id, {
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