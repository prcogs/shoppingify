import { UPDATE_FILTER_ITEMS } from "../constants"



const filterItemsReducer = (state = null, action) => {
    switch(action.type) {
        case UPDATE_FILTER_ITEMS:
            return action.payload
        default:
            return state
    }
}


export default filterItemsReducer