var db = require("../common/database");


function getAllPostTag(){
    return db.findAll("post_tageds");
}

function addPostTag(entity){
 return db.add('post_tageds', entity);
}

function findTagByPostId(id) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * from post_tageds WHERE post_id = ?`;
        var conn = db.getConnection(); 
        conn.connect();
        conn.query(sql, id, (err, value) => {
            if (err) reject (err);
            else resolve(value);
            conn.end();
        });
    })
;}

function deleteTagedPostById(id) {
    return db.deleteById('post_tageds', id);
}

module.exports = {
    getAllPostTag: getAllPostTag,
    addPostTag: addPostTag,
    findTagByPostId: findTagByPostId,
    deleteTagedPostById: deleteTagedPostById
}