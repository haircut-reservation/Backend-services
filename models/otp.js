const mongoose=require('mongoose')

const otpSchema=new mongoose.Schema({
    phone:{
        type:Number,
        required:true
    },
    otp:{
        type:Number,
        required:true,
    }
})
const otpModel=new mongoose.model('otp',otpSchema)
module.exports={otpModel,otpSchema}