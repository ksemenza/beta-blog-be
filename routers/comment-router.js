const express = require('express');
const commentModel = require('../models/comment-model.js');
const router = express.Router();


router.get('/', (req, res) => {
    commentModel.getCommentAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error did not get comment list'})
    })
})

// POST
router.post('/', (req, res) => {
    const commentData = req.body;
    commentModel.addComment(commentData)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error Comments were not added'})
    })
});


// GET STRAIN ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    commentModel.getComment(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Error Comment id ${id} were not found` })
    })
});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    commentModel.getCommentForUser(id)
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
            res.status(200).json({message: `Removed comment with id ${id}`});
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
        res.status(500).json({error: err, message:`Error Comment ${id} was not updated`})
    })
})

module.exports = router