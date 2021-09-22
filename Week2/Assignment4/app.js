const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.router);

app.listen(3000);