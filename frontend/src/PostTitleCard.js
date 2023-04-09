import React from 'react'
import { Link } from 'react-router-dom'

const PostTitleCard = ({post}) => {
    return (
        <div className='PostTitleCard'>
            <Link to={`/${post.id}`}>{post.title}</Link>
            <p><i>{post.description}</i></p>
        </div>
    )
}

export default PostTitleCard