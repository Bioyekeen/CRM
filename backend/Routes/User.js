import express from "express"
import formidable from "formidable"
import fs from "fs"
import path from "path"
import Db from "./../Db.js"
const User = express.Router()


User.post("/signup", (req, res) =>{
    const form = new formidable.IncomingForm()
    form?.parse(req, (err, fields, files) =>{
        const { fname, lname, pwd, email } = fields
        const { photo } = files

        if(fname === "" || lname === "" || pwd === "" || email === ""){
            res.json({message: "input field cannot be empty"})
        }
        else if(photo.originalFilename == ""){
            res.json({message: "Upload Your Photo"})

        }else{
            fs.copyFile(photo.filepath, path.join(path.resolve(), `../frontend/src/assets/upload/${photo?.originalFilename
            }`), (err) =>{
                if(err){
                    console.log(err)
                }else{
                    const sql = "INSERT INTO users(fname,lname,email,pwd, photo) value(?,?,?,?,?)"
                    Db.query(sql, [fname, lname, email, pwd, photo.originalFilename], (err) =>{
                        if(err){
                            console.log(err)
                        }else{
                            res.json({message: "success"})
                        }
                    })
                }
            })
        }
        
    })
})


User.post("/login", (req, res) =>{
    const form = new formidable.IncomingForm()
    form?.parse(req, (err, fields, files) =>{
        const {email, pwd} = fields

        const sql = "SELECT * FROM users WHERE email = ? AND pwd = ?"
        Db.query(sql, [email, pwd], (err, info) =>{
            if(err) {
                console.log(err)
            }else {
                if(info[0] === undefined){
                    res.json({message: "credentials not found"})
                }else{
                    res.json({message: "login successfully"})
                }
            }
        })
    })

})

export default User 