import { CHANGE_STATE_INFO_ITEM } from '../constants'


export const changeStateInfoItem = (active, item) => ({
    type : CHANGE_STATE_INFO_ITEM,
    payload : {
        active : active,
        item : item
    }
})