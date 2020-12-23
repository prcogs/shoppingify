import { CHANGE_STATE_ADD_ITEM_FORM } from "../constants";


export const changeStateAddItemForm = (active) => ({
    type: CHANGE_STATE_ADD_ITEM_FORM,
    payload: active
})