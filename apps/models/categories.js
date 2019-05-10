
var db = require("../common/database");

function getAllCategory() {
    return db.findAll("categories");
}

function deleteCatById(id){
    return db.deleteById(id);
}

module.exports = {
    getAllCategory: getAllCategory,
    deleteCatById: deleteCatById
}