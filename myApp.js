let express = require('express');
let app = express();


const absolutePath = __dirname + "/views/index.html"
const handler = (req, res) => {
    res.sendFile(absolutePath);
  }
app.get("/", handler)
// console.log("Hello World")

































 module.exports = app;
