
var db = require("../common/database");

function loadNews() {
    return db.findAll("posts_thumb");
}
module.exports = {
    loadNews: loadNews
}