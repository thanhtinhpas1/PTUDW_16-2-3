var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title: "manage-tag", layout: __dirname + "/../../views/admin/manage-tag"});
});

module.exports = router;