var express = require("express");
var config = require('config');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static folder
app.use(express.static(__dirname + "/public"));

//set up engine 
app.set("views", __dirname + "/apps/views")
app.set("view engine", "handlebars");
var handlebars = require("express-handlebars").create({
    defaultLayout: 'index',
    layoutsDir: __dirname + "/apps/views"
});
app.engine('handlebars', handlebars.engine);

var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);

var port = config.get("server.port");
app.listen(process.env.PORT || port, function(){
    console.log("Server is running on port: ", port);
});