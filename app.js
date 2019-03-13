const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes/user');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets'))
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', router);
app.get('/user/login', router);
app.get('/user/register', router);
app.post('/user/register', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App is listening on port: ' + PORT);
})