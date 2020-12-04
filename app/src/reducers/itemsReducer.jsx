import { SHOW_ITEMS } from '../constants'

const initItem = [
    {
        name:"chocolat"
    }, {
        name:"sucre"
    }
]

const itemsReducer = (state = initItem, action) => {
    switch (action.type) {
        case SHOW_ITEMS:
            return state
        default:
            return state
    }
}

export default itemsReducer
    
