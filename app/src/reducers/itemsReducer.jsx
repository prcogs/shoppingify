import { GET_ITEM } from '../constants'

// const initItem = [
//     {
//         name:"Chocolat",
//         category:"Dessert",
//         note:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//               Integer pulvinar dignissim enim, non pulvinar nisl blandit at. 
//               Nunc efficitur ipsum at mi vehicula, ut cursus metus porttitor. 
//               Aliquam facilisis faucibus purus, euismod cursus eros interdum sed. Donec sit amet molestie purus. 
//               Mauris dignissim eu erat at placerat.`,
//         url:"http"
//     }, {
//         name:"Pâte",
//         category:"Féculent",
//         note:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Integer pulvinar dignissim enim, non pulvinar nisl blandit at. 
//             Nunc efficitur ipsum at mi vehicula, ut cursus metus porttitor. 
//             Aliquam facilisis faucibus purus, euismod cursus eros interdum sed. Donec sit amet molestie purus. 
//             Mauris dignissim eu erat at placerat.`,
//         url:"http"
//     }, {
//         name:"Pizza",
//         category:"Féculent",
//         note:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Integer pulvinar dignissim enim, non pulvinar nisl blandit at. 
//             Nunc efficitur ipsum at mi vehicula, ut cursus metus porttitor. 
//             Aliquam facilisis faucibus purus, euismod cursus eros interdum sed. Donec sit amet molestie purus. 
//             Mauris dignissim eu erat at placerat.`,
//         url:"pizza.jpg"
//     } , {
//         name:"Acre",
//         category:"Féculent",
//         note:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Integer pulvinar dignissim enim, non pulvinar nisl blandit at. 
//             Nunc efficitur ipsum at mi vehicula, ut cursus metus porttitor. 
//             Aliquam facilisis faucibus purus, euismod cursus eros interdum sed. Donec sit amet molestie purus. 
//             Mauris dignissim eu erat at placerat.`,
//         url:""
//     }
// ]

const initItem = []

const itemsReducer = (state = initItem, action) => {
    switch (action.type) {
        case GET_ITEM:
            return action.payload
        default:
            return state
    }
}

export default itemsReducer
    
