var db = require("../common/database");

function findAll() {
    return db.findAll("posts");
}

function displayHotNews(){
    return db.displayTopHotNew("posts");
}

function displayTopView(){
    return db.displayTopViewer("posts");
}

function findLimit(begin,end){
    return db.findLimit("posts",begin,end);
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