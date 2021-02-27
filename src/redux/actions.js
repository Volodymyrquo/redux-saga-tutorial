import { CREATE_POST,FETCH_POST } from "./type";

export const createPost =(post)=>({
type: CREATE_POST,
payload: post
})

export const fetchPosts = ()=> {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispatch({type:FETCH_POST,payload:json })
    }
}