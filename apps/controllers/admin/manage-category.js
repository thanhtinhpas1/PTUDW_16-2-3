var express = require('express');
var router = express.Router();
var db =  require('../../models/categories');

router.get("/", function(req, res) {
    var categories = db.getAllCategory();
    categories.then(rows => {
        res.render("admin/manage-category", {title: "manage-category", layout:"admin/baseview",  categories : rows});
    }).catch(err => {
        console.log(err);
    })
});

router.get("/delete", (req, res) => {
    var id = req.query.id;clearImmediate
    if (id > 0) {
        var dl = db.deleteCatById(id);
        dl.then(rows =>{
            console.log("Delete success: " + rows)
        })
        .catch(err => {
            console.log("Delete failedL: " + err);
        })
    }
    res.redirect('/admin/manage-category');
});

router.post("/add", (req, res) => {
    var entity = req.body;
    console.log(entity);
    if (entity) {
        var rs = db.addNewCategory(entity);
        rs.then(row => {
            console.log("Add new category success");
        }).catch(err => {
            console.log('Add new category failed cause: ' + err);
        });
    }
    res.redirect('/admin/manage-category');
});

module.exports = router;