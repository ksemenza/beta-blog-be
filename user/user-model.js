module.exports = {
    addUser,
    findUserById,
    findUserByUsername, 
    findUsers,
    removeUser,
    getUsers,
    getUserPost
}

const db = require('../data/db-config.js');

// GET STRAINS
function getUsers() {
    return db('users');
}


function addUser(newUser) {
    return db('users')
        .insert(newUser)
        .then(ids => {
            return findUserById(ids[0]);
        });
}

function findUserById(user_id) {
    return db('users')
        .where({ id: user_id })
        .first();
}

function findUserByUsername(submitted_username) {
    return db('users')
        .where({ username: submitted_username})
        .first();
}

function findUsers() {
    return db('users')
    .select('users.id', 'users.username');
}

function removeUser(user_id) {
    return db('users')
        .where({ id: user_id })
        .del();
}


function getUserPost(user_id) {
    return db('post')
    .join('users', 'users.user_id', 'posts.user_id' )
    .select('posts.post_id', 'posts.name')
    .where('posts.user_id', user_id)
    
}



