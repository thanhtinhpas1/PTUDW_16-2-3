var db = require("../common/database");

//Find all posts
function findAll() {
    return db.findAll("posts");
}

//Get Top 10 of hot new posts
function displayHotNews(){
    return new Promise((resolve,reject) => {
        var sql = `SELECT * from posts ORDER BY post_date DESC LIMIT 10 `;
        
        var conn = db.getConnection();
        conn.connect();

        conn.query(sql,(err,value) => {
            if(err){
                reject(err);
            }
            else {
                resolve(value);
            }
            conn.end();
        })
    })
}

//Get top 10 posts having high view
function displayTopView(){
    return new Promise((resolve,reject) => {
        var sql = `SELECT * from posts ORDER BY views DESC LIMIT 10 `;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql,(err,value) => {
            if(err) reject(err);
            else resolve(value);
            conn.end();
        })
    })
}

//Pagination
function findLimit(begin,end){
    return new Promise((resolve, reject) => {
        var sql = `SELECT * from posts LIMIT ${end} OFFSET ${begin}`;

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
    findAll: findAll,
    displayHotNews: displayHotNews,
    displayTopView: displayTopView,
    findById: id => {
        return db.findById("posts", id);
    },
    findLimit: findLimit
}