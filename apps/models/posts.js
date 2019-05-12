var db = require("../common/database");

//Find all posts
function findAll() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName, post_tageds.tag_name as tagName 
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        JOIN post_tageds ON post_tageds.post_id = posts.id
        ORDER BY posts.post_date DESC`;

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
function getTopHot(){
    return new Promise((resolve,reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID ,users.pseudonym as userName ,COUNT(comments.id) AS comments
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        LEFT JOIN comments ON comments.post_id = posts.id
        GROUP BY posts.id
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
function getTopView(){
    return new Promise((resolve,reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName,COUNT(comments.id) AS comments
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        LEFT JOIN comments ON comments.post_id = posts.id
        GROUP BY posts.id
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
        var sql = `SELECT  posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName, post_tageds.tag_name as tagName,COUNT(comments.id) AS comments
         FROM posts
         JOIN categories ON posts.category_id = categories.id 
         JOIN users ON posts.created_by = users.id
         LEFT JOIN post_tageds ON post_tageds.post_id = posts.id
         LEFT JOIN comments ON comments.post_id = posts.id
         GROUP BY posts.id
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

function getTopPostOfWeek(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName, COUNT(comments.id) AS comments
         FROM posts
         JOIN categories ON posts.category_id = categories.id 
         JOIN users ON posts.created_by = users.id
         LEFT JOIN comments ON comments.post_id = posts.id
         GROUP BY posts.id
         ORDER BY views DESC,post_date DESC LIMIT 6`;
        
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
    getTopHot: getTopHot,
    getTopView: getTopView,
    findById: id => {
        return db.findById("posts", id);
    },
    findLimit: findLimit,
    getTopPostOfWeek: getTopPostOfWeek
}