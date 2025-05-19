const express = require('express');

const router = express.Router();


router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    if (username === 'admin' && password === 'password123') {
        return res.status(200).send('Login successful');
    } else {
        return res.status(401).send('Invalid username or password');
    }
});


router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    const newUser = { username, password };
    //Call db to save new user
    console.log('Saving user to database:', newUser);

    console.log(`User registered: ${username}`);
    res.status(201).send('User registered successfully');
    res.send('Register route');
});


router.get('/logout', (req, res) => {
    // Clear the user's session or authentication token
    console.log('User logged out');
    res.send('Logout route');
});

module.exports = router;