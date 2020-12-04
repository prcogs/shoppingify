const { SHOW_ITEMS, SHOW_HISTORY_LIST } = require("../constants");
const initItem = [
    {
        name:"chocolat"
    }, {
        name:"sucre"
    }
]


const filterNavBarReducer = (state = SHOW_ITEMS, action) => {
    switch(action.types) {
        case SHOW_ITEMS:
            return JSON.stringify(initItem)
        case SHOW_HISTORY_LIST:
            return "list"
        default:
            return state
    }
     
}

export default filterNavBarReducer