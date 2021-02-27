import { SHOW_LOADER, HIDE_LOADER } from "./type";

const initialState = {
    loading: false
}

export const appReducer =(state=initialState, action)=>{
    switch(action.type){
        
        case SHOW_LOADER:
            return {
                ...state,
                loading:true
            }
        case HIDE_LOADER :
            return {
                ...state,
                loading:false
            }
        
        default:
            return state
    }
}