var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title:"manage-draft",layout: "writer/manage-draft"});
});

module.exports = router;