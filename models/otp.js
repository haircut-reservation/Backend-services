const mongoose=require('mongoose')

const otpSchema=new mongoose.Schema({
    phone:{
        type:Number,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    verified:{
        type:Object,
        default:{
            isVerified:false,
            verifiedToken:null
        }
    }
})
const otpModel=new mongoose.model('otp',otpSchema)
module.exports={otpModel,otpSchema}