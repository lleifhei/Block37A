const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Retrieve all comments');
});

router.get('/:id', (req, res) => {
    const commentId = req.params.id;
    res.send(`Retrieve comment with ID: ${commentId}`);
});

router.post('/', (req, res) => {
    const newComment = req.body;
    res.send(`Create a new comment: ${JSON.stringify(newComment)}`);
});

router.put('/:id', (req, res) => {
    const commentId = req.params.id;
    const updatedComment = req.body;
    res.send(`Update comment with ID: ${commentId}, Data: ${JSON.stringify(updatedComment)}`);
});

router.delete('/:id', (req, res) => {
    const commentId = req.params.id;
    res.send(`Delete comment with ID: ${commentId}`);
});

module.exports = router;