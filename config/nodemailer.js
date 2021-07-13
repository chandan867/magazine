const nodemailer = require("nodemailer");
const path = require('path');
const dotenv=require('dotenv')
dotenv.config();



let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 456,
    secure: false,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD
    }
});

module.exports = transporter;