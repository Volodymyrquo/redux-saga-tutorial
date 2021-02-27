import { CREATE_POST,FETCH_POST, HIDE_LOADER, SHOW_LOADER } from "./type";

export const createPost =(post)=>({
type: CREATE_POST,
payload: post
})

export const showLoader =()=>({
    type: SHOW_LOADER
})
export const hideLoader =()=>({
    type: HIDE_LOADER
})

export const fetchPosts = ()=> {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        setTimeout(()=>{
            dispatch({type:FETCH_POST,payload:json })
            dispatch(hideLoader())
        }, 500)
    }
}