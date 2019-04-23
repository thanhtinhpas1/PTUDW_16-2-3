var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title: "single-post", layout:'admin/login'});
});

module.exports = router;