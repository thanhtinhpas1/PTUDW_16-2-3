var express = require('express');
var postdb = require("../models/posts");
var catedb = require("../models/categories");
var postTagdb = require("../models/post_tagdes");

var router = express.Router();
router.use("/single-post", require(__dirname + "/single-post"));
router.use("/archieve-post", require(__dirname + "/archieve-post"));


//middleware
router.use(require("../middlewares/local.mdw"));

// writer
router.use("/writer/add-content", require(__dirname + "/writer/add-content"));
router.use("/writer/manage-draft", require(__dirname + "/writer/manage-draft"));
//editor
router.use("/editor/manage-content", require(__dirname + "/editor/manage-draft"));
router.use("/editor/edit-content", require(__dirname + "/editor/edit-draft"));
router.use("/editor/confirm-post", require(__dirname + "/editor/confirm-post"));
router.use("/editor/report-post", require(__dirname + "/editor/report-post"));



//include for admin
router.use("/admin", require(__dirname + "/admin/index"));

//user
router.use("/login", require(__dirname + "/login"));
router.use("/edit-profile", require(__dirname + "/edit-profile"));

router.get("/", function(req, res) {
    
    //Pagination
    var page = parseInt(req.query.page) || 1;
    var perPage = 12;
    var begin = (page - 1)* perPage;

    //Call database
    var allPost = postdb.findLimit(begin,perPage);
    var allCate = catedb.getAllCategory();
    var topPostOfWeekDB = postdb.getTopPostOfWeek();
    var allPostTag = postTagdb.getAllPostTag();
    //Get database
    
    Promise.all([allPost,allCate ,topPostOfWeekDB,allPostTag]).then(values => {
        var lstPost = values[0];
        var lstCate = values[1];
        var lstPostOfWeek = values[2];
        var lstPostTag = values[3];

        if(lstPost != null || lstCate != null || lstPostOfWeek != null ||lstPostTag!= null){
            
            res.render("index", {
                post: lstPost,
                page: page,
                hottest: res.locals.lcTopHot[0],
                lstHottest : res.locals.lcTopHot.slice(1,10),
                lstCate: lstCate,
                popularNew: res.locals.lcTopHot.slice(0,3),
                firstPostOfWeek: lstPostOfWeek[0],
                lstPostOfWeek_1 : lstPostOfWeek.slice(1,3),
                lstPostOfWeeK_2 : lstPostOfWeek.slice(3,6),
                lstPostTag : lstPostTag
            })
        }  
    }).catch(err => {
        console.log(err);
    })
});

//Load more
router.get("/page/:page", function(req,res) {

    var page = parseInt(req.params.page);
    var perPage = 12;
    var begin = (page - 1)* perPage;
    var allPost = postdb.findLimit(begin,perPage);

    //Load more posts
    allPost.then(rows => {
        res.send(rows);
    }).catch(err => {
        console.log(err);
    })
})
module.exports = router;