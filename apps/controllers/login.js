var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.render("", {title: "single-post", layout:'login'});
});

router.post("/", function(req, res) {
    var params = req.body;
    if (params.username.trim.length == 0) {
        res.render("", {title: "single-post", layout:'login'}, {data: {error: "Vui lòng nhập tên tài khoản"}});
    }
    else if (params.password.trim.length == 0) {
        res.render("", {title: "single-post", layout:'login'}, {data: {error: "Vui lòng nhập mật khẩu"}});
    }
});

module.exports = router;