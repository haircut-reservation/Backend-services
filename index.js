const app=require('express')()
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()
const authroute=require('./routes/auth')

mongoose.connect(process.env.mongodburi).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

app.use(cors())

app.get('/test',(req,res)=>{
    res.send("Test works")
})

app.use('/auth',authroute)

app.listen(process.env.PORT || 8000)