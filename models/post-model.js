module.exports = {
    getPostsAll,
    getPosts,
    addPost,
    getPostForUser,
    getUserPost,
    removePost,
    updatePost,
}

const db = require('../data/db-config.js')

function getPostsAll(){
    return db('pos')
}

function addPost(newPost) {
    const pos = {
        author: newPost.author,
        title: newPost.title,
        content: newPost.content,
        topic: newPost.topic,
        user_id: newPost.user_id
    }
    return db('posts')
    .insert(post)
    .then(ids => {
        return getPostForUser(ids[0]);
    })
}

function getPostForUser(post_id) {
    return db('posts')
    .where({id: post_id})
    .first()
}

function getPosts(post_id) {
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

function getUserPost(user_id) {
    return db('posts')
    .join('users', 'users.user_id', 'posts.user_id' )
    .select('posts.post_id', 'posts.name')
    .where('posts.user_id', user_id)
    
}




async function removePost(post_id) {
    const post = await getPost(post_id);
    return db('posts')
    .where({id: post_id})
    .del()
    .then(() => {
        return post
    })
}

function updatePost(post_id, updatedPost) {
    return db('posts')
    .where({id: post_id})
    .update(updatedPost)
    .then(count => {
        return getPost(post_id)
    })
}

