var config = require('config');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : "news",
    port: "3306"
});
   
connection.connect();
  
function getConnection() {
    if (!connection) {
        connection.connect();
    }
    else {
        
        console.log('Success connect to db');
    }
    return connection;
}

module.exports = {
    getConnection: getConnection
}