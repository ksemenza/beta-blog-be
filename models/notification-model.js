module.exports = {
    getNotificationsAll,
    addNotification,
    getNotification,
    getCommentNotification,
    removeNotification,
    updateNotification,
}

const db = require('../data/db-config.js')

function getNotificationsAll(){
    return db('notifications')
}

function addNotification(newNotification) {
    return db('notifications')
        .insert(newNotification)
        .then(ids => {
            return getNotification(ids[0]);
        });
}

function getNotification(comment_id) {
    return db('notifications')
    .where({id: comment_id})
    .first();
}

function getCommentNotification(comment_id) {
    return db('comments')
    .join('comments', 'comments.comment_id', 'notification.id' )
    .select('notifications.id', 'notifications.reaction')
    .where('notifications.comment_id', comment_id)
    
}

function removeComment(notification_id) {
    return db('notifications')
        .where({ id: notification_id })
        .del();
}

function updateNotification(notification_id, updatedNotification) {
    return db('notifications')
    .where({id: notification_id})
    .update(updatedNotification)
    .then(count => {
        return getNotification(notification_id)
    })
}



