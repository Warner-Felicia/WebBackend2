const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    console.log('First middlware');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('In /users middleware');
    res.send('<h1>Welcome to the users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In / middleware');
    res.send('<h1>Welcome to my website</h1>');
});

app.listen(3000);
