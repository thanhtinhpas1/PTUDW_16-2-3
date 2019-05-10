
var db = require("../common/database");

function getAllTag() {
    return db.findAll("tags");
}

function deleteTagById(id){
    return db.deleteById("tags", id);
}

function addNewTag(entity) {
    return db.add("tags", entity);
}

module.exports = {
    getAllTag: getAllTag,
    deleteTagById: deleteTagById, 
    addNewTag: addNewTag
}