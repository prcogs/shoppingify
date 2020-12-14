import { configAPI } from '../lib/configAPI'
import { GET_ITEM } from '../constants'

export const getItem = () =>  async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.item}`)
    const resp = await res.json()

    dispatch({
        type: GET_ITEM,
        payload : resp
    })
   
    
}