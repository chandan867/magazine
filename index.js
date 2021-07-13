const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require('dotenv').config()

const port = process.env.PORT || 80;
const db = require('./config/mongoose');
db()

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
//set the view engine
app.set('view engine', 'hbs');

app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.use('/',require('./routes'));

app.get("*", (req,res) =>{
    res.send("oops.. 404 error");
});

app.listen(port, () =>{
    console.log(`server running on ${port}`);
}); 