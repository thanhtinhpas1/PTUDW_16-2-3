var express = require('express');
var router = express.Router();
var postsModel = require('../../models/posts');
router.get("/", function(req, res) {
    var p = postsModel.getAllPostsEditorManage(0, 2);
    p.then(rows =>{
        res.render("editor/manage-draft", {
            title:"manage-draft",
            layout: "../views/baseview-editor",
            listPosts : rows
        });

    }).catch(err =>{
        console.log(err);
    });
});

module.exports = router;