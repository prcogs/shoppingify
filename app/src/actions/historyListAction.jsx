import { GET_HISTORY_LIST } from "../constants"
import { configAPI } from '../lib/configAPI'




export const getHistoryList = () =>  async (dispatch) => {
    const pseudo = sessionStorage.getItem("pseudo")
    const res = await fetch(`${configAPI.url}${configAPI.history}/${pseudo}`)
    const resp = await res.json()

    dispatch({
        type: GET_HISTORY_LIST,
        payload : resp
    })
}