var db = require("../common/database");


//Find all posts
function findAll() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT DISTINCT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName
        FROM posts 
        LEFT JOIN categories ON posts.category_id = categories.id 
        LEFT JOIN users ON posts.created_by = users.id
        ORDER BY posts.post_date DESC`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) reject(err);
            else resolve(value);
            conn.end();
        });
    })
}

//Get Top 10 of hot new posts
function displayHotNews() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID ,users.pseudonym as userName ,COUNT(comments.id) AS comments
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        LEFT JOIN comments ON comments.post_id = posts.id
        GROUP BY posts.id
        ORDER BY posts.post_date DESC LIMIT 12 `;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) {
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
function displayTopView() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName,COUNT(comments.id) AS comments
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        LEFT JOIN comments ON comments.post_id = posts.id
        GROUP BY posts.id
        ORDER BY views DESC LIMIT 12 `;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) reject(err);
            else resolve(value);
            conn.end();
        })
    })
}

//Find a post by ID
function findById(id) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.id as catID, categories.name as catName, users.pseudonym as userName
        from posts
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON users.id = posts.created_by
        WHERE posts.id = ?`;
        var conn = db.getConnection();
        conn.connect();
        conn.query(sql, id, (err, value) => {
            if (err) reject(err);
            else {
                resolve(value[0]);
            }
            conn.end();
        });
    });
}

//Pagination
function findLimit(begin, perpage) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT  posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName, post_tageds.tag_name as tagName,COUNT(comments.id) AS comments
         FROM posts
         JOIN categories ON posts.category_id = categories.id 
         JOIN users ON posts.created_by = users.id
         LEFT JOIN post_tageds ON post_tageds.post_id = posts.id
         LEFT JOIN comments ON comments.post_id = posts.id
         GROUP BY posts.id
         LIMIT ${perpage} OFFSET ${begin}`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) reject(err);
            else resolve(value);
            conn.end();
        });
    })
}

function getAllPostsEditorManage(status, editorId) {
    var conn = db.getConnection();
    return new Promise((resolve, reject) => {
        conn.connect();
        var sql = `SELECT categories.name,  users.username, posts.id, posts.avatar, posts.content, posts.summary_content, posts.thumb_img, posts.title, posts.created_at
        FROM categories, posts, users
        WHERE categories.id = posts.category_id AND posts.status = ? AND posts.created_by = users.id AND categories.id IN (SELECT manage_categories.category_manage_id FROM manage_categories WHERE manage_categories.editor_id = ?)`;
        conn.query(sql, [status, editorId], (err, value) => {
            if (err) reject(err);
            else resolve(value);
            conn.end();
        });
    });
}
function updatePost(entity, id) {
    return db.uppdate('posts', entity, id);
}

function getTopPostOfWeek(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, categories.name as catName, categories.id as catID , users.pseudonym as userName,COUNT(comments.id) AS comments
        FROM posts 
        JOIN categories ON posts.category_id = categories.id 
        JOIN users ON posts.created_by = users.id
        LEFT JOIN comments ON comments.post_id = posts.id
        GROUP BY posts.id
        ORDER BY views DESC,posts.post_date DESC LIMIT 6 `;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) reject(err);
            else resolve(value);
            conn.end();
        })
    })
}
module.exports = {
    // Lấy tất cả những bài post ở status = 0 do editor quản lí
    getAllPostsEditorManage: getAllPostsEditorManage,
    updatePost: updatePost,
    findAll: findAll,
    findById: findById,
    getTopHot: displayHotNews,
    getTopView: displayTopView,
    findLimit: findLimit,
    getTopPostOfWeek: getTopPostOfWeek
}
