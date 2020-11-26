const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name : { type: String, required : true },
    category : { type : String, required : true},
    note : { type : String, require : true},
    image : { type : String, require : true}
})

module.exports = mongoose.models('Item', itemSchema)