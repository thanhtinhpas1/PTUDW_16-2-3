var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");

//TODO: make first for subscribe with premium post
router.post('/', (req, res) => {
  var txtSearch = req.body.search;
  var allPost = postdb.searchPosts(txtSearch);

  allPost.then(list => {

    for (const item of list) {
      if (item.premium_status == 1) {
        item['isActive'] = true;
      }
    }
    for (const c of res.locals.lcTopHot) {
      if (c.premium_status == 1) {
        c.isActive = true;
      }
    }
    for (const c of res.locals.lcTopView) {
      if (c.premium_status == 1) {
        c.isActive = true;
      }
    }
    console.log(list);
    
    res.render('search-result', {
      title: 'search-result', layout: 'base-view', list: list.sort(function (a, b) {
        return b.premium_status - a.premium_status;
      })
    });
  })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;