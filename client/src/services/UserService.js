import { axiosAuth } from './actions/axios';

// get the current user

export const getCurrentUserId = () => {
    return axiosAuth
    .post('/current-user', {})
    .then(response => {
        return response.data._id
    })
    .catch(err => {
        console.log(err);
    })
}

// get a user's name

export const getUserName = userID => {
    return axiosAuth
    .get('/user/' + userID, {
    })
    .then(response => {
        return response.data.name
    })
    .catch(err => {
        console.log(err);
    })
}

// update a user's name

export const updateUserName = userData => {
    return axiosAuth
    .put('/user/' + userData._id, {
        name: userData.name,
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}