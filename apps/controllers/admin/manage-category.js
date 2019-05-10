var express = require('express');
var router = express.Router();
var db =  require('../../models/categories');

router.get("/", function(req, res) {
    var categories = db.getAllCategory();
    categories.then(rows => {
        var list = rows;
        console.log(list);
        res.render("admin/manage-category", {title: "manage-category", layout:"admin/baseview",  categories : rows});
    }).catch(err => {
        console.log(err);
    })
});

router.get("delete", (req, res) => {
    var id = rq.id;
});

module.exports = router;