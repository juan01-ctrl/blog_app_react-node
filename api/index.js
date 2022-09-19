const express = require("express");
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
//ROUTES
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL).then(console.log("connected to mongo"))
.catch(err=> console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage}) 
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})



//Routes
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

// Web Server
// app.use(express.static('public'))
// app.get('*',(req,res)=>{
//     res.sendFile(__dirname + '/public/index.html')
// })


app.listen("8080",()=>{
    console.log("run in port 8080")
})