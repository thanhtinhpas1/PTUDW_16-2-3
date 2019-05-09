var express = require('express');
var router = express.Router();
var newdb = require("../models/news");


router.get("/", function(req, res) {
    var hotNewDB = newdb.displayHotNews();
    var topViewDB = newdb.displayTopView();

    hotNewDB.then(a => {
        console.log(a);
        
        topViewDB.then(b => {
            res.render("02_archive-page", {
                title:"archieve-post",
                layout: "base-view",
                topView: b,
                hotNew: a
            });
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
   
});

module.exports = router;