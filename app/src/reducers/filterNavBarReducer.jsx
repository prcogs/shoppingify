import { UPDATE_FILTER_NAV } from "../constants";


const filterNavBarReducer = (state = "items", action) => {
    switch(action.type) {
        case UPDATE_FILTER_NAV:
            return action.payload
        default:
            return state
    }
     
}

export default filterNavBarReducer