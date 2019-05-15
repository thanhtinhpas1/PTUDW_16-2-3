var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var userdb = require("../models/user");
var posttagdb = require("../models/post_tagdes");
var commentdb = require("../models/comments");
var tagdb = require("../models/tags")

//middleware
router.use(require("../middlewares/local.mdw"));

router.get("/:id", function(req, res) {

    var singlePost = postdb.findByPostId(parseInt(req.params.id));
    var postTag = posttagdb.getAllPostTag();
    var allPost = postdb.findAllPost();
    var allComment = commentdb.getAll();

    Promise.all([singlePost,postTag,allPost,allComment]).then(values => {
        var post = values[0];
        var postTag = values[1];
        var allPost = values[2];
        var allComment = values[3];

        //Get list post have the same category
        var lstSameCate = allPost.filter(item => {
            if(item.category_id == post.category_id && item.id != post.id)
                return item;
        })

        var lstPostTag = postTag.filter(item => {
            if(item.post_id == post.id) 
                return item;
        })

        //Get list comment of this post
        var lstComment = allComment.filter(item => {
            if(item.post_id == post.id)
                return item;
        })
        
        res.render("03_single-post", {
            title: "single-post", 
            layout:'base-view-1',
            post: post,
            premium: post.premium_status,
            sameCate: lstSameCate, //List post have same category
            favNew : res.locals.lcTopHot.slice(0,2),
            lstCom: lstComment,
            lstPostTag: lstPostTag,
            amountOfCom: lstComment.length,
            popularNew: res.locals.lcTopHot.slice(0,2)
        });
    });
});

module.exports = router;