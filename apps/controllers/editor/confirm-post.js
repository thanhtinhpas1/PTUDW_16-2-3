var express = require('express');
var router = express.Router();
var tagsModel = require('../../models/tags');
var categoriesModel = require('../../models/categories');
var tagpostModel = require('../../models/post_tagdes');
var postsModel = require('../../models/posts');
var util = require('../../helpers/helper');
var postId;
router.get("/", function(req, res) {
    postId = req.query.id; clearImmediate
    var t = tagsModel.getAllTag();
    var c = categoriesModel.getAllCategory();
    t.then(a => {
        c.then(b =>{
            res.render("editor/confirm-draft", {
                title:"manage-draft",
                layout: "../views/baseview-editor",
                categories: b,
                tags: a
            });
        }).catch(err => {
            console.log(err);
        })
    }).catch(err =>{
        console.log(err);
    });  
});

router.post("/", function(req, res) {
    var entity = {
        tag_name : req.body.tag_name,
        tag_id : req.body.tag_id,
        post_id : postId
    }
    var entityPost = {
        status: 2,
        post_date: util.UpdatePostDate(req.body.post_date),
        category_id: req.body.category_id      
    }
    console.log(postId);
    console.log(entity);
    console.log(entityPost);
    tagpostModel.addPostTag(entity).then(id =>{
        postsModel.updatePost(entityPost, postId).then(id => {
            res.redirect('/editor/manage-content')
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });

});

module.exports = router;