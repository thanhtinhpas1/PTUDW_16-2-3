var express = require('express');
var router = express.Router();
var tagsModel = require('../../models/tags');
var categoriesModel = require('../../models/categories');
var tagpostModel = require('../../models/post_tagdes');
var postsModel = require('../../models/posts');
var util = require('../../helpers/helper');
var postId;
router.get("/", function (req, res) {
    postId = req.query.id; clearImmediate
    p = postsModel.findById(postId);
    p.then(rows => {
        console.log(rows);
        res.render("editor/report-draft", {
            title: "manage-draft",
            layout: "../views/baseview-editor",
            post: rows
        });
    }).catch(err => {
        console.log(err);
    });


});

router.post("/", function (req, res) {
    var entity = {
        fail_reason: req.body.fail_reason,
        status: 1
    }
    console.log(entity);
    postsModel.updatePost(entity, postId).then(id => {
        res.redirect('/editor/manage-content')
    }).catch(err => {
    console.log(err);
});

});

module.exports = router;