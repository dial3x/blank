const initalState = {
    fetching: false,
    fetched: false,
    user:[],
    error:null,
    }
export default function reducer(state=initalState, action){
        switch(action.type){
        case "FETCH_USER_PENDING":{
    return {...state, fetching:true}
            break;
        }
        case "FETCH_USER_REJECTED":{
            return {...state, fetching:false, error:action.payload}
            break;
                }
                case "FETCH_USER_FULFILLED":{
                    return{...state, 
                        fetching:false,
                        fetched:true,
                        user:action.payload.data,}
                    break;
                        }
                    
    }
    return state
    }
    