var express = require('express');

var router = express.Router();

router.use("/email",require( __dirname + "/email" ));
router.use("/manage-category", require( __dirname + "/manage-category" ))

router.get("/", function(req, res) {
    // res.json({"message" : "This is home page"});
    res.render("", {title: "super-admin", layout: __dirname + "/../../views/admin/index"});
});

module.exports = router;