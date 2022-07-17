const router = require('express').Router()
const { otpModel } = require('../models/otp')
const bcrypt = require('bcrypt')
const { v4: uidgen } = require('uuid');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);

// Generate -> send otp to mobile and save in db
router.post('/genotp', async (req, res) => {
    const newotp = Math.floor(Math.random() * 1000000)
    console.log(newotp);

    //sending otp to phone service code

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedotp = await bcrypt.hash(newotp.toString(), salt)
        const findphonedb = await otpModel.findOne({ phone: req.body.phone })
        if (!findphonedb) {
            const newotpfeild = new otpModel({
                phone: req.body.phone,
                otp: hashedotp
            })
            await newotpfeild.save()
        } else {
            await otpModel.updateOne({ phone: req.body.phone }, { $set: { otp: hashedotp } })
        }
        res.status(200).send({ status: "OTP Sent" })
    } catch (err) {
        res.status(400).send({ status: "Error", err })
    }
})

// Validating otp
router.post('/valotp', async (req, res) => {
    const searchres = await otpModel.findOne({ phone: req.body.phone })
    const valid = await bcrypt.compare(req.body.otp.toString(), searchres.otp);
    if (valid) {
        const vtoken = uidgen()
        await otpModel.updateOne({ phone: req.body.phone }, { $set: { verified: { isVerified: true, verifiedToken: vtoken } } })
        res.status(200).send({ status: "OTP Validated", verifiedToken: vtoken })
    }
    else res.status(400).send({ status: "OTP Invalid" })
})

// Google Auth -> verify jwt token
router.post('/googleauth', (req, res) => {
    const { token } = req.body
    async function verify() {
        try {

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID,
            });
            const payload = ticket.getPayload();
            // const userid = payload['sub'];
            console.log(payload);
            res.status(200).send({ verified: true })
        } catch (err) {
            res.status(400).send({ verified: false })
        }
    }
    verify()

})


module.exports = router