var express = require('express');
var postdb = require("../models/posts");


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
    
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    var begin = (page - 1)* perPage;
    console.log(begin);
    var end = page*perPage;
    console.log(end);
  
    var hotNewDB = postdb.displayHotNews();
    var topViewDB = postdb.displayTopView();
    var allPost = postdb.findLimit(begin,end);

    hotNewDB.then(lstHot => {
        topViewDB.then(lstTop => {
            allPost.then(lstPost => {
                
                res.render("index", {
                    hotNew: lstHot,
                    topView: lstTop,
                    post: lstPost,
                    page: page
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