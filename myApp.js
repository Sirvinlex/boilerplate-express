let express = require('express');
let bodyParser = require('body-parser');
let app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}))

const middleWareFunc = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}
app.use(middleWareFunc)
// req.method, req.path and req.ip
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

const absolutePath = __dirname + "/views/index.html"
const handler = (req, res) => {
    res.sendFile(absolutePath);
}
const handler2 = (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") res.json({"message": "Hello World".toUpperCase()})
    else res.json({"message": "Hello json"})
}
const middleWareFunc2 = (req, res, next) =>{
    req.time = new Date().toString()
    next()
}
const handler3 = (req, res) =>{
    res.json({time: req.time});
}
const handler4 = (req, res) =>{
    res.json({echo: req.params.word});
}
const handler5 = (req, res) =>{
    res.json({name: `${req.query.first} ${req.query.last}`});
}
const handler6 = (req, res) =>{
    res.json({name: `${req.body.first} ${req.body.last}`});
}

app.get("/", handler)
app.get("/json", handler2)
app.get('/now', middleWareFunc2, handler3)
app.get('/:word/echo', handler4)
app.get('/name', handler5)
app.post('/name', handler6)
































 module.exports = app;
