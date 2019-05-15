var db = require("../common/database");

function getAllUser() {
    return db.findAll("users");
}

function deleteUser(id) {
    return db.deleteById( "users" ,id);
}

function addNewUser(entity) {
    return db.add("users", entity);
}

module.exports = {
    findOne: username => {
        return db.findOne('users', 'username', username);
    },
    findById: id =>{
        return db.findById('users',id);
    },
    getAllUser: getAllUser,
    deleteUser: deleteUser,
    addNewUser: addNewUser
}