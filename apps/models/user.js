var db = require("../common/database");

module.exports = {
    findOne: username => {
        return db.findOne('users', 'username', username);
    },
    findById: id =>{
        return db.findById('users',id);
    }
}