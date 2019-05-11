var db = require("../common/database");

function getAll(){
    return db.findAll("comments")
}

module.exports = {
    getAll: getAll
}