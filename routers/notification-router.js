const express = require('express');
const notificationModel = require('../models/notification-model.js');
const router = express.Router();
const restricted = require('../user/auth-middleware.js')

router.post('/', (req, res) => {
    const notificationData = req.body;
    notificationModel.addNotification(notificationData)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error Posts were not added'})
    })
});

router.get('/', (req,res) => {
    notificationModel.getNotificationsAll()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error user id post was not found`})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    notificationModel.getNotification(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Error Post id ${id} were not found` })
    })
});

router.get('/:id/details', (req, res) => {
    const id = req.params.id;
    notificationModel.getCommentNotification(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error:err, message:`Error User's post id ${id} not found`})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    notificationModel.removeNotification(id)
        .then(response => {
            res.status(200).json({message: `Removed user with id ${id}`});
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updatedNotification = req.body
    notificationModel.updateNotification(id, updatedNotification)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error Post ${id} was not updated`})
    })
})

module.exports = router