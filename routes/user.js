const express = require('express');
const crud = require('./crudApi/crud/api');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/user/login');
})

router.get('/user/login', (req, res) => {
    res.render('login');
})

router.get('/user/register', (req, res) => {
    res.render('register');
})

router.post('/user/register', crud.addData);
module.exports = router;