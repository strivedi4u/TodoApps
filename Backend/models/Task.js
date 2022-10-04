const mongoose = require(`mongoose`);
const {Schema}=mongoose;

const TaskSchema = new Schema({
    

    
    title:
    {
        type:String,
        required:true
    },

    description:
    {
        type:String,
        required:true
    },

    tag:
    {
        type:String,
        required:true 
    },
    author:
    {
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }

})

module.exports= mongoose.model(`task`,TaskSchema);