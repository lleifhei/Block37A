const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all items');
});

router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Get item with ID: ${itemId}`);
});

router.post('/', (req, res) => {
    const newItem = req.body;
    res.send(`Create a new item: ${JSON.stringify(newItem)}`);
});

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.send(`Update item with ID: ${itemId}, Data: ${JSON.stringify(updatedItem)}`);
});

router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Delete item with ID: ${itemId}`);
});

module.exports = router;