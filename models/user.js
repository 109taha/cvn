const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    name:String,
    email:{type:String, required:true, lowerCase:true},
    phone:Number,
    cvn: String,
},
    {timestamps:true}
)

const User = mongoose.model("User", UserModel)

module.exports = User