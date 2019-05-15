var express = require('express');
var router = express.Router();
var db =  require('../../models/user');

router.get("/", function(req, res) {
    var users = db.getAllUser();
    console.log(users);
    users.then(rows => {
        res.render("admin/manage-user", {title: "manage-user", layout:"admin/baseview",  users : rows});
    }).catch(err => {
        console.log(err);
    })
});

router.get("/delete", (req, res) => {
    var id = req.query.id;
    if (id > 0) {
        var dl = db.deleteUserById(id);
        dl.then(rows =>{
            console.log("Delete success: " + rows)
        })
        .catch(err => {
            console.log("Delete failedL: " + err);
        })
    }
    res.redirect('/admin/manage-user');
});

router.post("/add", (req, res) => {
    var entity = req.body;
    console.log(entity);
    if (entity) {
        var rs = db.addNewUser(entity);
        rs.then(row => {
            console.log("Add new user success");
        }).catch(err => {
            console.log('Add new user failed cause: ' + err);
        });
    }
    res.redirect('/admin/manage-user');
});

module.exports = router;