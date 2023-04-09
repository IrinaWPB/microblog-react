import React, { useState } from 'react'
import { addCommentToDB } from './actions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CommentForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.length >= 1) {
            dispatch(addCommentToDB(id, text))
            setText('')
        } 
    }

    return (
        <div className='CommentForm'>
            <form>
                <input type="text" name='text' value={text} onChange={handleChange} placeholder='New Comment'></input>
                <button className='btn' onClick={handleSubmit}>Add</button>
            </form>
        </div>  
    )
}

export default CommentForm