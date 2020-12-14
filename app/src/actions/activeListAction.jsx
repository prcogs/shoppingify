import { ADD_ITEM_IN_LIST, 
         CANCEL_ACTIVE_LIST,
         CREATE_ACTIVE_LIST,
         DETELE_ITEM_ACTIVE_LIST } from '../constants'
import getDate from '../lib/getDate'
import { configAPI } from "../lib/configAPI"


export const addItemInList = (name, number, check, category) => ({
    type :  ADD_ITEM_IN_LIST,
    payload : {
        name: name,
        number: number,
        check : check,
        category: category
    }
})

export const cancelActiveList = () => ({
    type: CANCEL_ACTIVE_LIST
})

// export const createList = (name) => ({
//     type : CREATE_ACTIVE_LIST,
//     payload : name
// })

export const createList = (name, items) =>  async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.history}/add-list`, {
                                                                    method: "POST",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body : JSON.stringify({    
                                                                            pseudo: sessionStorage.getItem('pseudo'),
                                                                            lists :  {
                                                                                name : name,
                                                                                date: getDate(),
                                                                                completed : false,
                                                                                items: items
                                                                            }
                                                                        })
                                                                })
    const resp = await res.json()

    dispatch({
        type: CREATE_ACTIVE_LIST,
        payload : resp
    })
   
    
}

export const deleteItemList = (name) => ({
    type: DETELE_ITEM_ACTIVE_LIST,
    payload: name
})

