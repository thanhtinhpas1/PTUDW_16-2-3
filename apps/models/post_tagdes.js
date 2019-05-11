var db = require("../common/database");


function getAllPostTag(){
    return db.findAll("post_tageds");
}
module.exports = {
    getAllPostTag: getAllPostTag
}