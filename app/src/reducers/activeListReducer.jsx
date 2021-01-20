import { ADD_ITEM_IN_LIST, 
         CANCEL_ACTIVE_LIST,
         CREATE_ACTIVE_LIST,
         DETELE_ITEM_ACTIVE_LIST,
         DELETE_ACTIVE_LIST,
         REMOVE_MESSAGE_API_ACTIVE_LIST,
         REMOVE_ONE_PIECE_ITEM,
         UPDATE_ACTIVE_LIST,
         UPDATE_IN_ACTIVE_LIST, 
         CHANGE_CHECK_ITEM_ACTIVE_LIST,
         CHANGE_ALL_CHECK_ACTIVE_LIST} from '../constants'

const initState = {
    messageAPI : "",
    succes : "",
    pseudo : "",
    name : "",
    date : "",
    completed : "",
    items : [],
    update: false
}


const activeListReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_ITEM_IN_LIST:
          const itemIsInList = state.items.filter(item => item.name  === action.payload.name)

          // si l'item est déjà présent dans la liste -> on ajoute 1 au nombre. 
          // si l'item n'est pas dans la liste on le rajoute normalement.
          if (itemIsInList.length > 0) {
              const removeItemInlist = state.items.filter(item => item.name !== action.payload.name)
              return {...state, items : [...removeItemInlist, {...itemIsInList[0], number:++itemIsInList[0].number}]}

            } else {
              return {...state, items : [...state.items, action.payload]}
            }

        case CHANGE_ALL_CHECK_ACTIVE_LIST:
          if(action.payload) {
            const newList = state.items.map((item) => item && { ...item, check: true } )
            return {...state, items:[...newList], completed:true}
          } else {
            return {...state, completed:false}
          }

        case CHANGE_CHECK_ITEM_ACTIVE_LIST:
          const removeItemInlist = state.items.filter(item => item.name !== action.payload.name)
          return {...state, items: [...removeItemInlist, action.payload]}
        
        case CANCEL_ACTIVE_LIST:
          return {
            messageAPI : "",
            succes : "",
            pseudo : "",
            name : "",
            date : "",
            completed : false,
            items : [],
            update: false
        }
        
        case CREATE_ACTIVE_LIST:

              if(action.payload.succes) {
                  return {
                    messageAPI : action.payload.message,
                    succes : action.payload.succes,
                    pseudo : "",
                    name : "",
                    date : "",
                    completed : false,
                    items : [],
                }

              } else {
                return {messageAPI :action.payload.message, succes : action.payload.succes, ...state}
              }

        case DETELE_ITEM_ACTIVE_LIST:
            const filter = state.items.filter(item => item.name !== action.payload)
            return {...state, items : [...filter]}
            
        case DELETE_ACTIVE_LIST:
          if(action.payload.succes) {
            return {
              messageAPI : action.payload.message,
              succes : action.payload.succes,
              ...state
          }

          } else {
            return {messageAPI :action.payload.message, succes : action.payload.succes, ...state}
          }

        case REMOVE_MESSAGE_API_ACTIVE_LIST:
          return {...state, messageAPI :"", succes: ""}

        case REMOVE_ONE_PIECE_ITEM:
          if(action.payload.number === 1) {

            const removeItemInlist = state.items.filter(item => item.name !== action.payload.name)
            return {...state, items : [...removeItemInlist]}
          }  else {
              const removeItemInlist = state.items.filter(item => item.name !== action.payload.name)
              return {...state, items : [...removeItemInlist, {...action.payload, number:--action.payload.number}]}
          }

        case UPDATE_IN_ACTIVE_LIST:
          return {...action.payload, update:true }

        case UPDATE_ACTIVE_LIST:
          if(action.payload.succes) {
            return {
              messageAPI : action.payload.message,
              succes : action.payload.succes,
              pseudo : "",
              name : "",
              date : "",
              completed : false,
              items : [],
              update: false
          }

          } else {
            return {messageAPI :action.payload.message, succes : action.payload.succes, ...state}
          }

        default:
            return state
    }
}

export default activeListReducer
