var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");


router.get("/", function(req, res) {
    var hotNewDB = postdb.displayHotNews();
    var topViewDB = postdb.displayTopView();

    hotNewDB.then(a => {
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