const express= require('express')
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app=express()
const path=require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
if (process.env.NODE_ENV === "production"){
      app.use(express.static("client/build"));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"client",  "build", "index.html"));
      });
    }
app.listen( 8080||process.env.PORT,()=>console.log(`Server Started new...${PORT}`));