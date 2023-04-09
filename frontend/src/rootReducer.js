import { CREATE, DELETE, UPDATE, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST } from "./actionTypes"

const INITIAL_STATE = {posts : {}, titles: []}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE:
            return { 
                ...state, 
                posts: {
                    ...state.posts, [action.post.id]: {
                        ...action.post, comments: []
                        }
                }
            }
        case DELETE:
            const next = {...state}
            delete next.posts[action.post.id]
            return next
        case UPDATE:
            return {...state, posts: {...state.posts, [action.post.id]: {...action.post, comments: state.posts[action.post.id].comments}}}
        case ADD_COMMENT:
            return {...state, posts: {...state.posts, [action.postId]: {...state.posts[action.postId], comments: [...state.posts[action.postId].comments, {id: action.comment.id, text: action.comment.text}]}}}
        case DELETE_COMMENT:
            return {...state, posts: {...state.posts, [action.postId]: {...state.posts[action.postId], comments: state.posts[action.postId].comments.filter(c => c.id !== action.commentId)}}}
        case GET_POSTS:
            return {...state, titles: action.titles}
        case GET_POST:
            return {...state, posts: {...state.posts, [action.post.id] : action.post}}
        default: 
            return state
    }
}

export default rootReducer
