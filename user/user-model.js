module.exports = {
    addUser,
    findUserById,
    findUserByUsername, 
    findUsers,
    removeUser,
    getUsers,
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



