const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
    userjoined:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
        required:true,
    },
    photo:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:Number
        //0 for male
        //1 for female
        //-1 for others
    },
    Address:{
        type:Array
    }
})

const userModel=new mongoose.model('users',userSchema)
module.exports={userModel}