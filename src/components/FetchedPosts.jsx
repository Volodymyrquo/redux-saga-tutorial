import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Post from './Post'

const FetchedPosts = () => {
     const dispatch = useDispatch()
     const posts = useSelector(state => state.posts.fetchedPosts)
     const loading = useSelector(state => state.app.loading)

     if(loading) {
         return <div className="spinner-border text-success" role="status">
         <span className="sr-only" />
       </div>
     }
    if(!posts.length){ return <button
     className="btn btn-primary"
     onClick={()=>dispatch(fetchPosts())}
     >Fetched</button>}

    return posts.map((post) => <Post post={post} key={post.id} />)
}

export default FetchedPosts
