let express = require('express');
let app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
const absolutePath = __dirname + "/views/index.html"
const handler = (req, res) => {
    res.sendFile(absolutePath);
  }
app.get("/", handler)
// console.log("Hello World")

































 module.exports = app;
