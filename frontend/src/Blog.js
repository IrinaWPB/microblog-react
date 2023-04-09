import React from 'react'
import PostList from './PostList'
import { useSelector } from 'react-redux'

const Blog = () => {
    
    return (
        <div className='Blog-main'>
            <p>Welcome to <b>Microblog</b>, our innovative site for comminicating on the information super highway.</p>
            <PostList />
        </div>
    )
}

export default Blog