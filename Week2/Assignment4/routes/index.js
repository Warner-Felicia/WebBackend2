const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        docTitle: 'Sign Up Page',
      });
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        docTitle: 'Users',
        users: users,
    });
});

router.post('/add-user', (req, res, next) => {
    const username = req.body.username;
    users.push(username);
    console.log(users);
    res.redirect('/users');
});

exports.router = router;
exports.users = users;
