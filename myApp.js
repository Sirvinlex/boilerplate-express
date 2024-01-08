let express = require('express');
let app = express();

const handler = (req, res) => {
    res.send("Hello Express");
  }
app.get("/", handler)
// console.log("Hello World")

































 module.exports = app;
