import express from "express"
import User from "./Routes/User.js"
import cors from "cors"
const server = express()
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({extended: true}))
server.use(User)


server.listen(5000, () =>{
    console.log("servr is working")
})