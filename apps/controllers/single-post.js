var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("03_single-post", {title: "single-post", layout:'base-view-1'});
});

module.exports = router;