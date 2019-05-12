var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var userdb = require("../models/user");
var posttagdb = require("../models/post_tagdes");
var commentdb = require("../models/comments");
var tagdb = require("../models/tags")
router.get("/:id", function(req, res) {
    var singlePost = postdb.findById(parseInt(req.params.id));

    singlePost.then(rowPost => {
        
        var category = catedb.findCategorybyId(parseInt(rowPost.category_id));
        var user = userdb.findById(parseInt(rowPost.created_by));
        var postTag = posttagdb.getAllPostTag();
        var allPost = postdb.getAll();
        var hotNewDB = postdb.getTopHot();
        var topViewDB = postdb.getTopView();
        var commentDB = commentdb.getAll();
        var topCate = catedb.getTopCate();
        var allTag = tagdb.getAllTag();

        user.then(rowUser => {
            category.then(rowCate => {
                postTag.then(rowTag => {

                    //Get list tag of post
                    var lstPostTag = rowTag.filter((a) => {
                        if(a.post_id == rowPost.id)
                        {
                            return a;
                        }
                    })

                    allPost.then(allPost => {

                        //Get List Post have the same category
                        var lstSameCate = allPost.filter(item => {
                            if(item.category_id == rowPost.category_id)
                                return item;
                        })

                        hotNewDB.then(lstHot => {

                            topViewDB.then(lstTop => {

                                commentDB.then(allCom => {
                                    //Get list comment of post
                                    var lstCom = allCom.filter(item => {
                                        if(item.post_id == rowPost.id)
                                            return item;
                                    })
                                    
                                    topCate.then(topCate => {
                                        
                                        allTag.then(lstTag => {
                                          
                                            res.render("03_single-post", {
                                                title: "single-post", 
                                                layout:'base-view-1',
                                                post: rowPost,
                                                cate: rowCate,
                                                user: rowUser,
                                                premium: rowPost.premium_status,
                                                postTag: lstPostTag, //List Tag of Post
                                                sameCate: lstSameCate, //List post have same category
                                                hotNew: lstHot,
                                                topView: lstTop,
                                                favNew : lstHot.slice(0,2),
                                                lstCom: lstCom,
                                                amountOfCom: lstCom.length,
                                                topCate: topCate,
                                                lstTag: lstTag,
                                                popularNew: lstHot.slice(0,2)
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