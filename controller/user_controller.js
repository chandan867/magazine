const Article=require('../models/articles');
const fs = require('fs');
const path = require('path');
const transporter=require('../config/nodemailer');
const dotenv=require('dotenv')
dotenv.config();


module.exports.articleSubmit= async function(req,res){

    try{
        
        Article.upload(req, res,async function(err){
                if (err) {console.log('*****Multer Error: ', err)}
                const article=await Article.create({
                    path:Article.avatarPath + '/' + req.file.filename
                });
             //  console.log(article);
                let Html=`for post <a href='http://localhost/editor/post/${article._id}'>click here</a>`
                let mailOptions={
                    from: process.env.EMAIL_ID,
                    to: process.env.EMAIL_ID,
                    subject:'abc',
                    text: 'hello',
                    html: Html,
                    attachments:[{
                      filename:req.file.filename,
                      path:req.file.path
                    }]
                  };
                
                  transporter.sendMail(mailOptions,function(err,info){
                    if(err){
                    console.log('error in sending mail'+''+err)
                    

                     }
                   // else{
                    //   console.log("email sent");
                    // }
                  });
                
                return res.redirect('/');
        })

    }catch(err){

console.log(err);
    }
    
}