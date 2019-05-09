var express = require('express');
var router = express.Router();
var newdb = require("../models/news");
router.get("/", function(req, res) {
    var singlePost = newdb.findById(parseInt(2));
    singlePost.then(row => {
        res.render("03_single-post", {
            title: "single-post", 
            layout:'base-view-1',
            post: row
        });
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;