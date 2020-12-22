import { ADD_ITEM_IN_LIST, 
         CANCEL_ACTIVE_LIST,
         CHANGE_ALL_CHECK_ACTIVE_LIST,
         CHANGE_CHECK_ITEM_ACTIVE_LIST,
         CREATE_ACTIVE_LIST,
         DELETE_ACTIVE_LIST,
         DETELE_ITEM_ACTIVE_LIST, 
         REMOVE_MESSAGE_API_ACTIVE_LIST, 
         REMOVE_ONE_PIECE_ITEM,
         UPDATE_ACTIVE_LIST,
         UPDATE_IN_ACTIVE_LIST } from '../constants'
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

export const changeAllCheck = (check) => ({
    type:CHANGE_ALL_CHECK_ACTIVE_LIST,
    payload: check
}) 

export const changeCheckItem = (item, check) => ({
    type: CHANGE_CHECK_ITEM_ACTIVE_LIST,
    payload : {
        name : item.name,
        number : item.number,
        check : check,
        category : item.category
    }
})

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

export const deleteList = (name) => async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.history}/delete-list`, {
                                                                    method: "DELETE",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body : JSON.stringify({    
                                                                            pseudo: sessionStorage.getItem('pseudo'),
                                                                            name : name,
                                                                        })
                                                                })
    const resp = await res.json()

    dispatch({
        type: DELETE_ACTIVE_LIST,
        payload : resp
    })
}

export const removeMessageAPI = () => ({
    type : REMOVE_MESSAGE_API_ACTIVE_LIST
})

export const removeOnePieceItem = (name, number, check, category) => ({
    type :  REMOVE_ONE_PIECE_ITEM,
    payload : {
        name: name,
        number: number,
        check : check,
        category: category
    }
})

export const updateInActiveList = (list) => ({
    type: UPDATE_IN_ACTIVE_LIST,
    payload : {
        pseudo : sessionStorage.getItem("pseudo"),
        name : list.name,
        date : list.date,
        completed :list.completed,
        items : list.items
    }
})
 
export const updateActiveList = (activeList) => async (dispatch) => {
    const res = await fetch(`${configAPI.url}${configAPI.history}/change-list`, {
                                                                    method: "PUT",
                                                                    headers: {
                                                                        'Accept': 'application/json',
                                                                        'Content-Type': 'application/json'
                                                                    },
                                                                    body : JSON.stringify({    
                                                                            pseudo: sessionStorage.getItem('pseudo'),
                                                                            lists :  {
                                                                                name : activeList.name,
                                                                                date: activeList.date,
                                                                                completed : activeList.completed,
                                                                                items: activeList.items
                                                                            }
                                                                        })
                                                                })
    const resp = await res.json()

    dispatch({
        type: UPDATE_ACTIVE_LIST,
        payload : resp
    })
}

