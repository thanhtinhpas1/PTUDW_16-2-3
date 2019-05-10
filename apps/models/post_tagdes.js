var db = require("../common/database");

function getAllPostTagById(post_id) {
    return db.findByPostId("post_tageds",post_id);
}

function getAllPostTag(){
    return db.findAll("post_tageds");
}
module.exports = {
    getAllPostTagById: getAllPostTagById,
    getAllPostTag: getAllPostTag
}