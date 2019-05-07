
var db = require("../common/database");

var conn = db.getConnection();

function loadNews(){
    return new Promise((resolve,reject) => {
        conn.query("Select * from posts_thumb", function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else{
                resolve(results);
            }
            conn.end();
        });
    });
}
module.exports = {
    loadNews: loadNews
}