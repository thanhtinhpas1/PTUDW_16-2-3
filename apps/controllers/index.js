var express = require('express');
var newdb = require("../models/news");


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

    var hotNewDB = newdb.displayHotNews();
    var topViewDB = newdb.displayTopView();

    hotNewDB.then(a => {
        topViewDB.then(b => {
            res.render("index", {
                hotNew: a,
                topView: b
            })
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
});

module.exports = router;