const express = require('express');
const commentModel = require('../models/comment-model.js');
const router = express.Router();
const restricted = require('../user/auth-middleware.js')


// POST
router.post('/', (req, res) => {
    const commentData = req.body;
    commentModel.addComment(commentData)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error Posts were not added'})
    })
});

router.get('/', (req,res) => {

    commentModel.getCommentsAll()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error user id post was not found`})
    })
})



// GET STRAIN ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    commentModel.getComment(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Error Post id ${id} were not found` })
    })
});

router.get('/:id/details', (req, res) => {
    const id = req.params.id;
    commentModel.getCommentDetails(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error:err, message:`Error User's post id ${id} not found`})
    })
})

// DELETE USER BY ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    commentModel.removeComment(id)
        .then(response => {
            res.status(200).json({message: `Removed user with id ${id}`});
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updatedComment = req.body
    commentModel.updateComment(id, updatedComment)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error Post ${id} was not updated`})
    })
})

module.exports = router