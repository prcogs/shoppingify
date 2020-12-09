import { UPDATE_ACTIVE_LIST, 
         CREATE_ACTIVE_LIST, 
         ADD_ITEM_IN_LIST, 
         CANCEL_ACTIVE_LIST } from '../constants'

export const updateList = (name) => ({
    type: UPDATE_ACTIVE_LIST,
    payload: name
})

export const createList = (name) => ({
    type : CREATE_ACTIVE_LIST,
    payload : name
})

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