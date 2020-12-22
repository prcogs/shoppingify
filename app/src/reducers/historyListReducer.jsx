import { GET_HISTORY_LIST } from '../constants'

// state = {
//     lists :[
//         {
//             name,
//             date,
//             completed,
//             items
//         }, {
//             list2
//         }
//     ]
// }



const historyListReducer = (state = [], action) => {
    switch(action.type) {
        case GET_HISTORY_LIST:
            return action.payload 
        default:
            return state
    }
}

export default historyListReducer