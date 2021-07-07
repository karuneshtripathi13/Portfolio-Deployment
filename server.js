const express= require('express')
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app=express()
const path=require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.post('/api/forma',(req,res)=>{
    let data=req.body
    let smtptransport=nodemailer.createTransport({
        service:"Gmail",
        port:465,
        auth:{
            user:"karuneshtoblackhole@gmail.com",
            pass:"miazopoxkmfhzgdt"
        }
    })
    let mailoptions={
        from:data.email,
        to:"karuneshtripathi13@gmail.com",
        subject:`Message from ${data.firstn} ${data.lastn} through karuneshtripathi.com`,
        html:`
        <h3>Information</h3>
        <ul>
        <li>First Name: ${data.firstn}</li>
        <li>Last Name: ${data.lastn}</li>
        <li>Email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }
    smtptransport.sendMail(mailoptions,(error,response)=>{
        if(error)
        {
            console.log(error)
            res.send(error)
        }
        else{
            console.log("success")
            res.send("Success")
        }
    })
    smtptransport.close()
})
if (process.env.NODE_ENV === "production"){
      app.use(express.static("client/build"));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"client",  "build", "index.html"));
      });
    }
app.listen( 8080||process.env.PORT,()=>console.log(`Server Started new...${PORT}`));