import { UPDATE_FILTER_ITEMS } from '../constants'

const initItem = [
    {
        name:"chocolat",
        category:"dessert"
    }, {
        name:"pâte",
        category:"féculent"
    }, {
        name:"pizza",
        category:"féculent"
    }
]

const itemsReducer = (state = initItem, action) => {
    switch (action.type) {
        // case UPDATE_FILTER_ITEMS:
        //     return action.payload
        default:
            return state
    }
}

export default itemsReducer
    
