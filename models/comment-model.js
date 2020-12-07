module.exports = {
    getCommentsAll,
    getComments,
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

function addComment(newPost) {
    return db('posts')
        .insert(newPost)
        .then(ids => {
            return getComment(ids[0]);
        });
}

function getComment(post_id) {
    return db('posts')
    .where({id: post_id})
    .first();
}

function getComments(post_id) {
    return db('posts')
    .join('users', 'users.id', 'post.user_id')
    .select(
        'post.id as post_id',
        'post.author as author',
        'post.title as title',
        'post.content as content',
        'post.topic as topic',
        'users.username as username'
    )
    .where({'post_id':post_id})
    .first();
}

function getPostComment(post_id) {
    return db('comments')
    .where('post_id', post_id)
    
}


function removeComment(post_id) {
    return db('posts')
        .where({ id: post_id })
        .del();
}


function updateComment(post_id, updatedPost) {
    return db('posts')
    .where({id: post_id})
    .update(updatedPost)
    .then(count => {
        return getComment(post_id)
    })
}



