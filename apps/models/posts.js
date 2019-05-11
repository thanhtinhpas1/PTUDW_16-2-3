var db = require("../common/database");

//Find all posts
function findAll() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName 
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err ) reject(err);
            else resolve(value);
            conn.end();
        });
    })
}

//Get Top 10 of hot new posts
function displayHotNews(){
    return new Promise((resolve,reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID ,users.pseudonym as userName 
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        ORDER BY posts.post_date DESC LIMIT 10 `;
        
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
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        ORDER BY views DESC LIMIT 10 `;

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
        var sql = `SELECT  posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName
         FROM posts
         JOIN categories ON posts.category_id = categories.id 
         JOIN users ON posts.created_by = users.id
         LIMIT ${end} OFFSET ${begin}`;

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
    getAll: findAll,
    displayHotNews: displayHotNews,
    displayTopView: displayTopView,
    findById: id => {
        return db.findById("posts", id);
    },
    findLimit: findLimit
}