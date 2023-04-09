import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { savePostInDB, updateInDb } from './actions'
import { v4 as uuid } from 'uuid'
import './PostForm.css'

const PostForm = () => {
    const { id } = useParams()
    let post = useSelector(store => store.posts[id])
  
    let INITIAL_STATE;
    if (post) {
        const { title, description, body } = post
        INITIAL_STATE = { title, description, body }
    } else {
        INITIAL_STATE = {
            title: "",
            description: "",
            body: ""
        }
    }
  
    const [data, setData] = useState(INITIAL_STATE)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleUpdate = () => {
        const post = {...data, id:id}
        dispatch(updateInDb(post.id, post))
        navigate(`/${id}`)   
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {...data, id : uuid()}
        dispatch(savePostInDB(post))
        navigate('/')
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className='PostForm'>
            <h3>{!post ? 'New' : 'Edit'} Post</h3>
            <form>
                <div className='mb-3'>
                    <label htmlFor='title'>Title:</label>
                    <input className='form-control' type="text" id="title" name="title" value={data.title} onChange={handleChange}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='description'>Description:</label>
                    <input className='form-control' type="text" id="description" name="description" value={data.description} onChange={handleChange}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='body'>Text:</label>
                    <textarea className='form-control' rows="3" type="text" id="body" name="body" value={data.body} onChange={handleChange}></textarea>
                </div>
                
                {!post ? <button className="btn btn-primary" onClick={handleSubmit}>Save</button> :
                         <button className='btn btn-primary' onClick={handleUpdate}>Save Changes</button> }
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostForm