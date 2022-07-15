const router = require('express').Router()
const {otpModel}=require('../models/otp')

router.post('/genotp', async(req, res) => {
    const newotp=Math.floor(Math.random()*1000000)
    const newotpfeild=new otpModel({
        phone:req.body.phone,
        otp:newotp
    })
    const result=await newotpfeild.save()
   res.status(200).send({ status: "OTP Sent" })
})

router.post('/valotp',async (req,res)=>{
    const searchres=await otpModel.findOne({phone:req.body.phone})
    if(searchres.otp===req.body.otp) res.status(200).send({ status: "OTP Validated" })
    else res.status(400).send({ status: "OTP Invalid" })
})


module.exports = router