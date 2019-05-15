var db = require("../common/database");

function deletePostById(id) {
    return db.deleteById('posts', id);
}

function findAll() {
    return db.findAll('posts');
}

function findById(id) {
    return db.findById('posts', id);
}

//Find all posts
function findAllPost() {
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID
        FROM posts ,users, categories 
        WHERE posts.created_by = users.id AND posts.category_id = categories.id AND posts.status = 2
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

//number of posts 
function getNumberOfPost(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT COUNT(*) as max
        FROM posts 
        WHERE posts.status = 2`;

        var conn = db.getConnection();
        conn.connect();

        conn.query(sql, (err, value) => {
            if (err) reject(err);
            else resolve(value[0]);
            conn.end();
        });
    })
}

//number of comments
function getNumberOfComments(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.id as postID, COUNT(comments.id) as numberOfComment
        FROM posts
        LEFT JOIN comments ON posts.id = comments.post_id
        GROUP BY posts.id`;

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
        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID
        FROM posts ,users, categories 
        WHERE posts.created_by = users.id AND posts.category_id = categories.id AND posts.status = 2
        ORDER BY posts.post_date DESC
        LIMIT 10`;

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

        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID
        FROM posts ,users, categories 
        WHERE posts.created_by = users.id AND posts.category_id = categories.id AND posts.status = 2
        ORDER BY posts.views DESC
        LIMIT 10`;

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
function findByPostId(id) {
    return new Promise((resolve, reject) => {

        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID
        from posts,users, categories 
        WHERE posts.id = ? AND posts.created_by = users.id AND posts.category_id = categories.id`;

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
        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID, post_tageds.tag_name as tagName, post_tageds.tag_id as tagID
        FROM posts ,users, categories , post_tageds 
        WHERE posts.created_by = users.id AND posts.category_id = categories.id AND posts.status = 2 AND post_tageds.post_id = posts.id
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
    return db.update('posts', entity, id);
}

function getTopPostOfWeek(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT posts.*, users.pseudonym as userName, categories.name as catName,categories.id as catID
        FROM posts ,users, categories 
        WHERE posts.created_by = users.id AND posts.category_id = categories.id AND posts.status = 2
        ORDER BY posts.views DESC, posts.post_date DESC `;

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
    findAllPost: findAllPost,
    getTopHot: displayHotNews,
    getTopView: displayTopView,
    findLimit: findLimit,
    findByPostId: findByPostId,
    getTopPostOfWeek: getTopPostOfWeek,
    deletePostById: deletePostById,
    findAll: findAll,
    findById: findById
}
