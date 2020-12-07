const express = require('express');
const postModel = require('../models/post-model.js');
const router = express.Router();


router.get('/', (req, res) => {
    postModel.getPostAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error did not get positive effects list'})
    })
})

// POST
router.post('/', (req, res) => {
    const postData = req.body;
    postModel.addPost(postData)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Error Posts were not added'})
    })
});


// GET STRAIN ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    postModel.getPost(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Error Post id ${id} were not found` })
    })
});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    postModel.getPostForUser(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error:err, message:`Error User's post id ${id} not found`})
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    postModel.removePos(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error post id ${id} was not deleted`})
    });
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updatedPost = req.body
    postModel.updatePost(id, updatedPost)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message:`Error Post ${id} was not updated`})
    })
})

module.exports = router