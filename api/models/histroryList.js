const mongoose = require('mongoose');

const historyListSchema = mongoose.Schema({
    pseudo : { type : String, required : true },
    lists : {
        type : Array,
        name : String,
        date : Date,
        completed : Boolean,
            items : {
                type : Array,
                name : String,
                number : Number,
                check : Boolean
            }  
    }
})

module.exports = mongoose.model('historyList', historyListSchema);


// {
//     pseudo : "precogs",
//     lists :[ {
//         name : "first",
//         date : "12 nov",
//         completed : true,
//             allItems : [ {
//                 name : "choco",
//                 number : 3,
//                 check : false
//                 }, {
//                     name : "biere",
//                     number : 3,
//                     check : true
//                     }
//             ]  
//     }, {
//         name : "second",
//         date : "12 nov",
//         completed : true,
//             allItems : {
//                 name : "choco",
//                 number : 3,
//                 check : false
//                 }  
//     }
// ]
// }

