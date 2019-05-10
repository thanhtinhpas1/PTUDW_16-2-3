var express = require("express");
var config = require('config');
var bodyParser = require("body-parser");
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: config.get('secret_key'),
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

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

//set moment helper for handlebars
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);

var port = config.get("server.port");
app.listen(process.env.PORT || port, function(){
    console.log("Server is running on port: ", port);
});

// //set page for status
// app.use((req, res, next) => {
//     res.status(404).render('404');
//     res.status(500).render('500');
// });
