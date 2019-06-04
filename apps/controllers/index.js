var express = require('express');
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var postTagdb = require("../models/post_tagdes");
var authAdmin = require('../middlewares/auth-admin');
var auth = require('../middlewares/auth');
var authEditor = require('../middlewares/auth-editor');


var router = express.Router();
router.use("/single-post", require(__dirname + "/single-post"));
router.use("/archieve-post", require(__dirname + "/archieve-post"));

//middleware
router.use(require("../middlewares/local.mdw"));

// writer
router.use("/writer", require(__dirname + "/writer/add-content"));
router.use("/writer/manage-draft", require(__dirname + "/writer/manage-draft"));
//editor
router.use("/editor", authEditor, require(__dirname + "/editor/manage-draft"));

//include for admin
router.use("/admin", authAdmin, require(__dirname + "/admin/index"));

//user
router.use("/login", auth, require(__dirname + "/login"));
router.use("/forgot", require(__dirname + "/forgot-pass"));
router.use("/reset", require(__dirname + "/reset-pass"));
router.use("/change-pass", require(__dirname + "/change-pass"));


router.use("/edit-profile", require(__dirname + "/edit-profile"));

//search
router.use("/search", require(__dirname + "/search"));

//all-post
router.use('/posts', require(__dirname + "/all-post"));

//post by tag
router.use('/posts/tag', require(__dirname + '/all-tag'));

router.get("/", function(req, res) {
    
    //Pagination
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    var begin = (page - 1)* perPage;

    //Call database
    var allPost = postdb.findLimit(begin,perPage);
    var numberOfPost = postdb.getNumberOfPost();
    var allCate = catedb.getAllCategory();
    var topPostOfWeekDB = postdb.getTopPostOfWeek();
    var allPostTag = postTagdb.getAllPostTag();
    var numberOfComments = postdb.getNumberOfComments();
    var topPostOfCat = catedb.getTopPostOfCat();
    
    //Get database
    Promise.all([allPost,allCate ,topPostOfWeekDB,allPostTag,numberOfPost,numberOfComments, topPostOfCat]).then(values => {
        var lstPost = values[0];
        var lstPostOfWeek = values[2];
        var lstPostTag = values[3];
        var numberOfPost = values[4];
        var numberOfComments = values[5];
        //filter menu
        var parentMenu = [];
        if(values[1].length > 0){
            parentMenu = values[1].filter(x => x.parent_id == 0);
            for (const item of parentMenu) {
                var childrenMenu = values[1].filter(x => x.parent_id == item.id);
                item['childs'] = childrenMenu;
            }
        }  
        res.render("index", {
            parentMenu: parentMenu,
            post: lstPost,
            page: page,
            hottest: res.locals.lcTopHot[0],
            lstHottest : res.locals.lcTopHot,
            popularNew: res.locals.lcTopHot.slice(0,3),
            firstPostOfWeek: lstPostOfWeek[0],
            lstPostOfWeek_1 : lstPostOfWeek.slice(1,3),
            lstPostOfWeeK_2 : lstPostOfWeek.slice(3,6),
            lstPostTag : lstPostTag,
            max: numberOfPost.max,
            numberOfComments: numberOfComments,
            topPostOfCat: values[6]
        })
    }).catch(err => {
        console.log(err);
    })
});

router.post('/log-out', (req, res) => {
    req.logOut();
    res.redirect('/');
})

module.exports = router;