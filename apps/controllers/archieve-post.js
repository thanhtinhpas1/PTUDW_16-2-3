var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var tagdb = require("../models/tags");

router.get("/:cateID", function(req, res) {

    var cateID = parseInt(req.params.cateID);

    var hotNewDB = postdb.displayHotNews();
    var topViewDB = postdb.displayTopView();
    var topCateDB = catedb.getTopCate();
    var allTagDB = tagdb.getAllTag();
    var allPostDB = postdb.getAll();

    hotNewDB.then(lstHot => {
        topViewDB.then(lstTop => {
            topCateDB.then(lstTopCate => {
                allTagDB.then(lstTag => {
                    allPostDB.then(lstPost => {
                        console.log(lstPost);
                        //Get list post have same category
                        var lstPostOfCate = lstPost.filter(item => {
                            if(item.category_id == cateID)
                                return item;
                        })
                        res.render("02_archive-page", {
                            title:"archieve-post",
                            layout: "base-view",
                            lstHot: lstHot,
                            lstTop: lstTop,
                            lstTopCate: lstTopCate,
                            lstTag: lstTag,
                            popularNew: lstHot.slice(0,3),
                            lstPostOfCate: lstPostOfCate.slice(1,lstPostOfCate.length),
                            firstPost: lstPostOfCate[0]
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
   
});

module.exports = router;