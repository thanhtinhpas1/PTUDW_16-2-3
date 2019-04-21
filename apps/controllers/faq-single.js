var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("05_FAQs-single");
});

module.exports = router;