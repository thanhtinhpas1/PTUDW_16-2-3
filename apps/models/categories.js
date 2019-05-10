
var db = require("../common/database");

function getAllCategory() {
    return db.findAll("categories");
}

function deleteCatById(id){
    return db.deleteById("categories", id);
}

function addNewCategory(entity) {
    return db.add("categories", entity);
}

module.exports = {
    getAllCategory: getAllCategory,
    deleteCatById: deleteCatById, 
    addNewCategory: addNewCategory
}