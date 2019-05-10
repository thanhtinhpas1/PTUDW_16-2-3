var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var userdb = require("../models/user");
var tagdb = require("../models/post_tagdes");

router.get("/:id", function(req, res) {
    var singlePost = postdb.findById(parseInt(req.params.id));

    singlePost.then(rowPost => {

        var category = catedb.findCategorybyId(parseInt(rowPost.category_id));
        var user = userdb.findById(parseInt(rowPost.created_by));
        var tag = tagdb.getAllPostTag();
        var allPost = postdb.findAll();
        var hotNewDB = postdb.displayHotNews();
        var topViewDB = postdb.displayTopView();

        //Format post_date into dd/mm/yyyy
        var mm = rowPost.post_date.getMonth() + 1; 
        var today = rowPost.post_date.getDate() + '-' + mm + '-' + rowPost.post_date.getFullYear();
        
        user.then(rowUser => {
            category.then(rowCate => {
                tag.then(rowTag => {

                    var lstTag = rowTag.filter((a) => {
                        if(a.post_id == rowPost.id)
                        {
                            return a;
                        }
                    })

                    allPost.then(allPost => {
                        var lstSameCate = allPost.filter(item => {
                            if(item.category_id == rowPost.category_id)
                                return item;
                        })

                        hotNewDB.then(lstHot => {
                            topViewDB.then(lstTop => {
                                res.render("03_single-post", {
                                    title: "single-post", 
                                    layout:'base-view-1',
                                    post: rowPost,
                                    cate: rowCate,
                                    user: rowUser,
                                    date: today, 
                                    premium: rowPost.premium_status,
                                    tag: lstTag, //List Tag of Post
                                    sameCate: lstSameCate, //List post have same category
                                    hotNew: lstHot,
                                    topView: lstTop
                                });
                            }).catch(err => {
                                console.log(err);
                            })
                        }).catch(err => {
                            console.log(err);
                        })
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(err => {
                    console.log(err);
                })
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;