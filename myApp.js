let express = require('express');
let app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

const absolutePath = __dirname + "/views/index.html"
const handler = (req, res) => {
    res.sendFile(absolutePath);
}
const handler2 = (req, res) => {
    res.json({
        "message": "Hello json"
    });
}
app.get("/", handler)
app.get("/json", handler2)
// console.log("Hello World")

































 module.exports = app;
