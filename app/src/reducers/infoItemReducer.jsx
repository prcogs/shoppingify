import { CHANGE_STATE_INFO_ITEM } from '../constants'

const initState = {
    active:false,
    item:{}
}


const infoItemReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_STATE_INFO_ITEM:
            return {active : action.payload.active, item : action.payload.item}
        default:
            return state
    }
}

export default infoItemReducer