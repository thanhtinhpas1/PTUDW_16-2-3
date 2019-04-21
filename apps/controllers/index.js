var express = require('express');

var router = express.Router();
router.use("/single-post", require(__dirname + "/single-post"));
router.use("/archieve-post", require(__dirname + "/archieve-post"));
router.use("/faqs", require(__dirname + "/faqs"));
router.use("/faq-single", require(__dirname + "/faq-single"));
router.use("/contact", require(__dirname + "/contact"));

router.get("/", function(req, res) {
    // res.json({"message" : "This is home page"});
    res.render("index");
});



module.exports = router;