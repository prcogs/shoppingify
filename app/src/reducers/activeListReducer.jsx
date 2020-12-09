import { UPDATE_ACTIVE_LIST, CREATE_ACTIVE_LIST, ADD_ITEM_IN_LIST, CANCEL_ACTIVE_LIST } from '../constants'
import getDate from '../lib/getData'

const initState = {
    pseudo : "",
    name : "",
    date : "",
    completed : false,
    items : []
}


const activeListReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_ACTIVE_LIST:
            return {    
                pseudo: "test",
                date: getDate(),
                name : action.payload,
                completed : false,
                items : state.items 
            }

        case UPDATE_ACTIVE_LIST:
            return [...state, {"name": action.payload, "number": action.payload.number}]

        case ADD_ITEM_IN_LIST:
            const itemIsInList = state.items.filter(item => item.name  === action.payload.name)

            // si l'item est déjà présent dans la liste -> on ajoute 1 au nombre. 
            // si l'item n'est pas dans la liste on le rajoute normalement.
            if (itemIsInList.length > 0) {
                const updateItem = state.items.filter(item => item.name !== action.payload.name)

                return {...state, items : [...updateItem, {...itemIsInList[0], number:++itemIsInList[0].number}]}
              } else {
                return {...state, items : [...state.items, action.payload]}
              }
        case CANCEL_ACTIVE_LIST:
            return {...state, items : []}

        default:
            return state
    }
}

export default activeListReducer


// const isItemInList = state.filter(item => item.name === action.payload.name)

//             if(isItemInList.length !== 0) {
//                 const newItem = {...action.payload, number: isItemInList[0].number++}
//                 console.log(isItemInList[0].number++)
//                 const filterItem = state.filter(item => item.name != action.payload.name)
//                 console.log(filterItem)
//                 return [...filterItem, newItem]
//             } else {
//                 return [...state, action.payload]
//             }