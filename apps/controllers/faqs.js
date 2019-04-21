var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("04_FAQs");
});

module.exports = router;