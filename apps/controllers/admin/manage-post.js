var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title: "manage-post", layout: __dirname + "/../../views/admin/manage-post"});
});

module.exports = router;