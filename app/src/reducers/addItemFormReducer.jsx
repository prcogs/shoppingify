import { CHANGE_STATE_ADD_ITEM_FORM } from '../constants'

const initState = {
    active:false,
}


const addItemFormReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_STATE_ADD_ITEM_FORM:
            return { active : action.payload}
        default:
            return state
    }
}

export default addItemFormReducer