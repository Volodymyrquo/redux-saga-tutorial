import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Post from './Post'

const FetchedPosts = ({posts}) => {
     const dispatch = useDispatch()
    if(!posts.length) return <button
     className="btn btn-primary"
     onClick={()=>dispatch(fetchPosts())}
     >Fetched</button>

    return posts.map((post,idx) => <Post post={post} key={idx} />)
}

export default FetchedPosts
