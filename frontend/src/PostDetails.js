import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { FcEditImage, FcDeleteDatabase } from 'react-icons/fc'
import CommentForm from './CommentForm'
import CommentsList from './CommentsList'
import { removeFromDB, fetchPost, removeComment } from './actions'
import './PostDetails.css'

const PostDetails = () => {
    const {id} = useParams()
    const post = useSelector(store => store.posts[id])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getPost() {
            dispatch(fetchPost(id))
        }
        if (!post) {
            getPost()
        }
    }, [dispatch, id, post])

    const handleEditPost = () => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = () => {
        dispatch(removeFromDB(id))
        navigate('/')
    }

    const handleDeleteComment = (commentId) => {
        dispatch(removeComment(commentId, id))
    } 

    if (!post) return <p>Loading</p>
    return (
        <div className='PostDetails-main'>
            <div className='PostDetails-btns'>
               <span className='btn' onClick={handleEditPost}><FcEditImage /></span>
               <span className='btn' onClick={handleDelete}><FcDeleteDatabase /></span> 
            </div>
            <h3>{post.title}</h3>
            <p><i>{post.description}</i></p>
            <p>{post.body}</p>
            <hr />
            <CommentsList post={post} deleteComment={handleDeleteComment}/>
            <CommentForm />
        </div>
    )
}

export default PostDetails
