var express = require('express');

var router = express.Router();

router.use("/email",require( __dirname + "/email" ));
router.use("/manage-category", require( __dirname + "/manage-category" ))
router.use("/manage-tag", require( __dirname + "/manage-tag" ))
router.use("/manage-post", require( __dirname + "/manage-post" ))
router.use("/manage-account", require( __dirname + "/manage-account" ))

router.get("/", function(req, res) {
    // res.json({"message" : "This is home page"});
    res.render("", {title: "super-admin", layout: __dirname + "/../../views/admin/index"});
});

module.exports = router;