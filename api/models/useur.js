const mongoose = require('mongoose');

const useurSchema = mongoose.Schema({
    pseudo : { type: String, required: true },
    pass : { type: String, required: true },
    token :  String ,
    history : { 
        type : Object , 
        date : Date,
        completed : Boolean,
        list : {
            type : Object,
            name : String,
            items : {
                name : String,
                number : Number,
                check : Boolean
            }
        }    
    }
    
})

// {
//     pseudo : "precogs",
//     pass : "precogs",
//     token : "",
//     history : {
//         date : 01/01/20,
//         completed : false,
//         list : {
//             name : "list",
//             items : {
//                 name : "Chocolat",
//                 number : 1,
//                 check : false
//             }
//         }
//     }
// }

module.exports = mongoose.model('useur', useurSchema);
