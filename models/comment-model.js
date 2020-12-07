module.exports = {
    getCommentsAll,
    addComment,
    getComment,
    getPostComment,
    removeComment,
    updateComment,
}

const db = require('../data/db-config.js')

function getCommentsAll(){
    return db('comments')
}

function addComment(newComment) {
    return db('comments')
        .insert(newComment)
        .then(ids => {
            return getComment(ids[0]);
        });
}

function getComment(post_id) {
    return db('posts')
    .where({id: post_id})
    .first();
}

function getPostComment(post_id) {
    return db('comments')
    .where({'post_id' : post_id}) 
}

function removeComment(comment_id) {
    return db('comments')
        .where({ id: comment_id })
        .del();
}

function updateComment(comment_id, updatedComment) {
    return db('comments')
    .where({id: comment_id})
    .update(updatedComment)
    .then(count => {
        return getComment(comment_id)
    })
}



