var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var user = require('../models/user');

passport.use(new Strategy(
    function (username, password, cb) {
        user.findOne(username).then(user => {
            if (!user) return cb(null, false);
            if (user.password != password) {
                return cb(null, false)
            };
            return cb(null, user);
        })
            .catch(err => {
                return cb(err);
            })
    }));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});
    
passport.deserializeUser(function(id, cb) {
    user.findById(id).then(user => {
        cb(null, user);
    })
    .catch( err => {
            if (err) { return cb(err); 
        }
    });
});


router.get("/", function (req, res) {
    res.render("", { title: "single-post", layout: 'login' });
});

router.post('/',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        console.log('success');
        res.redirect('../');
    });

module.exports = router;