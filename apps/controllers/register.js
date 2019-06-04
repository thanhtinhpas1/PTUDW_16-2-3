var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('register', {layout: false});
})

module.exports = router;