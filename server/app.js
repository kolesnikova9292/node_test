var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var server = require("http").Server(app);
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "../dist/my-dream-app")));

app.use(require("./routes"));

server.listen(3000, () => {
  console.log("server listen on port 3000");
});

module.exports = app;
