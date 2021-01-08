import { DECONNECT_USER_AUTH, LOGIN_USER_AUTH, SIGNUP_USER_AUTH } from "../constants"
import { configAPI } from "../lib/configAPI"

export const deconnect = () => ({
    type: DECONNECT_USER_AUTH
})

export const login = (pseudo, password) => async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.auth}/login`, {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body : JSON.stringify({    
                                                                            pseudo: pseudo,
                                                                            password : password 
                                                                        })
                                                                })
    const resp = await res.json()
    
    if(res.status === 401) {
        dispatch({
            type: LOGIN_USER_AUTH,
            payload : {
                        succes : false,
                        resp : resp.error
            }
        })
    } else {
        dispatch({
            type: LOGIN_USER_AUTH,
            payload : resp
        })
    }
}


export const signup = (pseudo, password) =>  async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.auth}/signup`, {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body : JSON.stringify({    
                                                                            pseudo: pseudo,
                                                                            password : password 
                                                                        })
                                                                })
    const resp = await res.json()

    if(res.status === 400) {
        dispatch({
            type: SIGNUP_USER_AUTH,
            payload : {
                message : resp.error._message,
                succes : false
            }
        })
    } else {
        dispatch({
            type: SIGNUP_USER_AUTH,
            payload :{
                message : resp.message,
                succes : true
            } 
        })
    }
}

