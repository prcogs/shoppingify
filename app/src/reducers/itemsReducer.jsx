import { UPDATE_FILTER_ITEMS } from '../constants'

const initItem = [
    {
        name:"Chocolat",
        category:"Dessert"
    }, {
        name:"Pâte",
        category:"Féculent"
    }, {
        name:"Pizza",
        category:"Féculent"
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
    
