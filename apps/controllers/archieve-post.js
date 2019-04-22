var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("02_archive-page", {title:"archieve-post",layout: "base-view"});
});

module.exports = router;