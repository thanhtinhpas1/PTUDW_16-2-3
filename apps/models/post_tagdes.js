var db = require("../common/database");


function getAllPostTag(){
    return db.findAll("post_tageds");
}
function addPostTag(entity, id){
 return db.add('post_tageds', entity, id);
}
module.exports = {
    getAllPostTag: getAllPostTag,
    addPostTag: addPostTag
}