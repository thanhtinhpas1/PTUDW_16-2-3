
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

function findCategoryById(id){
    return db.findById("categories",id);
}

function findParent(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT * from categories WHERE  parent_id = 0`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err ) reject(err);
            else resolve(value);
            conn.end();
        });
    })
}

function getTopCate(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT categories.id , categories.name ,COUNT(*) as SL 
        FROM categories JOIN posts ON posts.category_id = categories.id 
        GROUP BY categories.id,categories.name
        ORDER BY COUNT(*) DESC
        LIMIT 10 OFFSET 0`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err ) reject(err);
            else resolve(value);
            conn.end();
        });
    })
}

module.exports = {
    getAllCategory: getAllCategory,
    deleteCatById: deleteCatById, 
    addNewCategory: addNewCategory,
    findCategorybyId: findCategoryById,
    findParent: findParent,
    getTopCate : getTopCate
}