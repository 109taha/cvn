const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()
const PORT = process.env.PORT||"8000"

app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectToMongoDB =require("./dbConfig/config")
connectToMongoDB()

const user = require("./API/user")
app.use("/v1", user)

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})