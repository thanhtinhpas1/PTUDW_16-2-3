var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function addUser(user) {
    if (user) {
        var defer = q.defer();
        console.log(user.username + " " + user.password);
        var query = conn.query('INSERT INTO users SET ?', user, function(err, result){
            if (err) {
                defer.reject(err);
                console.log(err);
            }
            else{
                defer.resolve(result);
                console.log(result);
            }
        });
        return defer.promise;
    }
    return false;
}

module.exports = {
    addUser: addUser
}