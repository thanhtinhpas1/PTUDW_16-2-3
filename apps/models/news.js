
var db = require("../common/database");

function loadNews() {
    return db.findAll("posts");
}
module.exports = {
    loadNews: loadNews
}