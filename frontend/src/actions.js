import { CREATE, DELETE, UPDATE, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST } from './actionTypes'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/posts'

// get all titles for homepage
export function fetchPosts() {
    return async function(dispatch) {
        const {data} = await axios.get(API_URL)
        return dispatch(gotPosts(data))
    }
}
function gotPosts(titles) {
    return {
        type: GET_POSTS,
        titles
    }
}

//get post by id to show details
export function fetchPost(id) {
    return async function(dispatch) {
        const {data} = await axios.get(`${API_URL}/${id}`)
        return dispatch(getPostDetails(data))
    }
}

function getPostDetails(post) {
    return {
        type: GET_POST,
        post
    }
}

//create new post and save it to DB
export function savePostInDB(data) {
    return async function(dispatch) {
        await axios.post(API_URL, data)
        return dispatch(createPost(data))
    }
}
function createPost(post) {
    return {
        type: CREATE,
        post 
    }
}

//remove post from DB
export function removeFromDB(id) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${id}`)
        return dispatch(deletePost(id))
    }
}
function deletePost(post) {
    return {
        type: DELETE,
        post
    }
}

//update current post
export function updateInDb(id, data) {
    return async function(dispatch) {
        const resp = await axios.put(`${API_URL}/${id}`, data)
        return dispatch(updatePost(resp.data))
    }
}
function updatePost(post) {
    return {
        type: UPDATE,
        post
    }
}

//add comment
export function addCommentToDB(id, text) {
    return async function(dispatch) {
        const resp = await axios.post(`${API_URL}/${id}/comments/`, { text })
        return dispatch(addComment(id, resp.data))
    }
}
function addComment(postId, comment) {
    return {
        type: ADD_COMMENT,
        comment,
        postId
    }
}

//remove comment
export function removeComment(commentId, id) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${id}/comments/${commentId}`)
        return dispatch(deleteComment(commentId, id))
    }
}
function deleteComment(commentId, postId) {
    return {
        type: DELETE_COMMENT, 
        commentId,
        postId
    }
}