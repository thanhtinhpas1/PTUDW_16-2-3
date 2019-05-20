var express = require('express');
var router = express.Router();
var postdb = require("../models/posts");

//import middle ware
var Fuse = require('fuse.js');

var options = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  threshold: 1,
  location: 0,
  distance: 100,
  maxPatternLength: 255,
  minMatchCharLength: 1,
  keys: [
    "title",
    "summary_content",
    "content"
  ]
};

//TODO: make first for subscribe with premium post
router.post('/', (req, res) => {
  var txtSearch = req.body.search;
  var allPost = postdb.findAll();
  allPost.then(list => {
    var fuse = new Fuse(list, options);
    var result = fuse.search(txtSearch);
    res.render('search-result', { title: 'search-result', layout: 'base-view', list: result });
  })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;