import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const contactRoutes = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  port:465,
  secure:true,
  logger:true,
  debug:true,
  secureConnection:false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls:{
    rejectUnauthorized:true
  }
});


contactRoutes.post("/sendMail", async (req, res) => {
  console.log("---------------------------------------->",req.body)
  console.log("request body in member", req.body);

    let mailOptions= {
        from: req?.body?.email,
        to: process.env.EMAIL_USER,
        subject:`A message from ${req?.body?.name}`,
        html:  `<!DOCTYPE html>
        <html>
        <head>
        <style>
        .ot{
            color:red;
            font-weight: bold;
        }
        .n{
            font-weight: bold;
            font-size: 20px;
        }
        .ot1{
            font-weight: bold;
            color:red;
            font-size: 25px;
        }
        </style>
        </head>
        <body>
        <h1>Port<span class="ot1">folio</span></h1>
        <hr/>
        Hello Samiksha Message from <span class="n"> ${req?.body?.name} </span>,
        <div> ${req?.body?.message}</span> </div>
       
        </body>
</html>`
    }
    transporter.sendMail(mailOptions, function(error,info){
        if(error) {
            console.log(error)
        }
        else{
            console.log('Email sent: '+info.response);
        }
    })
    res.json({"err":0, "name":req.body.name,"message":"Message Send successfully"})

});


export default contactRoutes;
