import { DECONNECT_USER_AUTH, LOGIN_USER_AUTH, SIGNUP_USER_AUTH } from "../constants"

const initState = {
    pseudo : "",
    token : "",
    succes : false,
    msg:"",
    msgCreate :"",
    succesCreate:""
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case DECONNECT_USER_AUTH:
            sessionStorage.removeItem('pseudo');

            return initState

        case LOGIN_USER_AUTH:
            if(action.payload.succes === false) {
                return { ...state, succes: false, msg : action.payload.resp }
            } else {
                sessionStorage.setItem('pseudo', action.payload.userId);
                return { pseudo : action.payload.userId,
                         token  : action.payload.token,
                         succes : true }
            }
        
        case SIGNUP_USER_AUTH:
            return { ...state, msgCreate: action.payload.message, succesCreate: action.payload.succes }
            
        default:
            return state
    }
}

export default authReducer