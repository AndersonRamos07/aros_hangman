const express = require('express');
const app = express();
const router = express.Router();
const path = require('node:path');

app.set('view engine', 'ejs');

router
    .get('/', (req, res) =>
    {
        res.render('index');
    })
    .get('/back', (req, res) =>
    {
        res.render('index');
    })
    .get('/create', (req, res) =>
    {
        res.render('create');
    })
    .get('/play', (req, res) =>
    {
        res.render('play');
    })
    .get('/find',(req, res) =>
    {
        res.render('find');
    });

module.exports = router;