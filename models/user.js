const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:22
    },
    userjoined:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:true
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
    },
    otp:{
        type:Number,
        min:6,
        max:6
    }
})

const userModel=new mongoose.model('users',userSchema)
module.exports={userModel}