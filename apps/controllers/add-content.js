var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title:"add-content",layout: "writer/add-content"});
});

module.exports = router;