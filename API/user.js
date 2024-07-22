const User = require("../models/user")
const sendResetEmail = require("../helper/emailSend")
const router = require("express").Router()

router.post("/addData",async  (req, res)=>{
    try {
        const {name, email, phone, cvn} = req.body
        console.log("req.body ===>", req.body)
        if(!name, !email, !phone, !cvn){
            return res.status(400).send({success: false, message:"Kindly filled all the field"})
        }
        const newData = await User({
            name, email, phone, cvn
        })
        const emails = "109taha@gmail.com"
        const subject = "You Recived a new order";
    const text = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order</title>
  </head>
  <body>
      <p>You Recived a new order</p>
      
  </body>
  </html>`;
        sendResetEmail(emails, subject, text)
        newData.save()
        return res.status(200).send({success: true, message:"User added on database successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, message:"Internal server error", error: error.message})
    }
})

router.get("/getAllData", async (req, res)=>{
    try {
        const allData = await User.find()
        return res.status(200).send({success: true, data:allData})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, message:"Internal server error", error: error.message})
    }
})


module.exports = router