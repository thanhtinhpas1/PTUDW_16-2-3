var express = require('express');
var router = express.Router();
var newdb = require("../models/news");


router.get("/", function(req, res) {
    var newDatabase = newdb.loadNews();
    newDatabase.then(rows => {
        
        var list = rows;
        console.log(list);
        res.render("02_archive-page", {
            title:"archieve-post",
            layout: "base-view",
            listNew: rows
        });
    }).catch(err => {
        console.log(err);
    })
   
});

module.exports = router;