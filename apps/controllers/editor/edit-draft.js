var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title:"edit-draft",layout: "editor/edit-draft"});
});

module.exports = router;