import { ADD_ITEM_IN_LIST, 
         CANCEL_ACTIVE_LIST,
         CREATE_ACTIVE_LIST,
         DETELE_ITEM_ACTIVE_LIST } from '../constants'
import getDate from '../lib/getDate'

const initState = {
    pseudo : "",
    name : "",
    date : "",
    completed : false,
    items : []
}


const activeListReducer = (state = initState, action) => {
    switch(action.type) {
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
        
        case CREATE_ACTIVE_LIST:

              return state
            
            // return {    
            //     pseudo: sessionStorage.getItem('pseudo'),
            //     date: getDate(),
            //     name : action.payload,
            //     completed : false,
            //     items : state.items 
            // }

        case DETELE_ITEM_ACTIVE_LIST:
            const filter = state.items.filter(item => item.name !== action.payload)
            console.log(filter)
            return {...state, items : [...filter]}

        default:
            return state
    }
}

export default activeListReducer
