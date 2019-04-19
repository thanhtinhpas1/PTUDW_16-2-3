var express = require('express');

var router = express.Router();
router.use("/single-post", require(__dirname + "/single-post"));

router.get("/", function(req, res) {
    // res.json({"message" : "This is home page"});
    res.render("index");
});



module.exports = router;