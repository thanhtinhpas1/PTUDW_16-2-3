var express = require('express');
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var tagdb = require("../models/tags");

var router = express.Router();
router.use("/single-post", require(__dirname + "/single-post"));
router.use("/archieve-post", require(__dirname + "/archieve-post"));

// writer
router.use("/writer/add-content", require(__dirname + "/writer/add-content"));
router.use("/writer/manage-draft", require(__dirname + "/writer/manage-draft"));
//editor
router.use("/editor/manage-content", require(__dirname + "/editor/manage-draft"));
router.use("/editor/edit-content", require(__dirname + "/editor/edit-draft"));

//include for admin
router.use("/admin", require(__dirname + "/admin/index"));

//user
router.use("/login", require(__dirname + "/login"));
router.use("/edit-profile", require(__dirname + "/edit-profile"));

router.get("/", function(req, res) {
    
    //Pagination
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    var begin = (page - 1)* perPage;
    var end = page*perPage;

    //Call database
    var hotNewDB = postdb.getTopHot();
    var topViewDB = postdb.getTopView();
    var allPost = postdb.findLimit(1,end);
    var catParent = catedb.findParent();
    var allCate = catedb.getAllCategory();
    var topCate = catedb.getTopCate();
    var allTag = tagdb.getAllTag();
    var topPostOfWeekDB = postdb.getTopPostOfWeek(); 

    //Get database
    hotNewDB.then(lstHot => {

        topViewDB.then(lstTop => {
            
            allPost.then(lstPost => {
                
                catParent.then(lstCatParent => {

                    allCate.then(lstCate => {
                        
                        topCate.then(lstTopCate => {

                            allTag.then(lstTag => {
                                
                                topPostOfWeekDB.then(lstPostOfWeek => {
                                   console.log(lstPostOfWeek);
                                    res.render("index", {
                                        hotNew: lstHot,
                                        topView: lstTop,
                                        post: lstPost,
                                        page: page,
                                        hottest: lstHot[0],
                                        lstHottest : lstHot.slice(1,10),
                                        lstCatParent : lstCatParent,
                                        lstCate: lstCate,
                                        lstTopCate: lstTopCate,
                                        lstTag : lstTag,
                                        popularNew: lstHot.slice(0,3),
                                        firstPostOfWeek: lstPostOfWeek[0],
                                        lstPostOfWeek_1 : lstPostOfWeek.slice(1,3),
                                        lstPostOfWeeK_2 : lstPostOfWeek.slice(3,6)   
                                    })
                                }).catch()
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