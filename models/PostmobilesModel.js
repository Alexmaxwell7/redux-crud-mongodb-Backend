const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
id:{
type:String,
unique:true
},
    title: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required:true
    }
    

})

module.exports = mongoose.model('Post',postSchema)