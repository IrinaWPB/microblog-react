import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'
import PostTitleCard from './PostTitleCard'
import { fetchPosts } from './actions'

const PostList = () => {
    const titles = useSelector(store => store.titles, shallowEqual)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(function() {
        async function fetchTitle() {
            await dispatch(fetchPosts());
            setIsLoading(false)
        }
        if (isLoading) {
            fetchTitle()
        }
    }, [dispatch, isLoading])

    if (isLoading) return <b>Loading</b>;

    if (!isLoading && titles.length === 0) {
        return <b>Please add a post!</b>;
    }
    return (
        <div className='PostList'>
            {titles.map(p => (
                <PostTitleCard post={p} key={p.id}/>
            ))}
        </div>
    )
}

export default PostList
