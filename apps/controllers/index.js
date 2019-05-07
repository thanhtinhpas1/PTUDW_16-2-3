var express = require('express');

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
    // res.json({"message" : "This is home page"});
    res.render("index");
});

module.exports = router;