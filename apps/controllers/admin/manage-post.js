var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("admin/manage-post", {title: "manage-post", layout:"admin/baseview"});
});

module.exports = router;