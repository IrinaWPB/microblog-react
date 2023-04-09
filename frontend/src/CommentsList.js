import React from 'react'

const CommentsList = ({post, deleteComment}) => {
    const handleClick = (commentId) => {
        deleteComment(commentId)
    }
    return (
        <div className='Comments'>
            {post.comments.length === 0 ? <h4>No comments yet.</h4> : <h4>Comments:</h4>}
            {post.comments.map(c => (
                <div key={c.id}>
                    <span className='btn' onClick={() => handleClick(c.id)} style={{color:'red'}}>x </span><span>{c.text}</span>
                </div>
                ))
            }
        </div>
    )
}

export default CommentsList