const express = require('express');
    const app = express();
const router = express.Router();
const path = require('node:path');
const fsExtra = require('fs-extra');
const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    const jsonParser = bodyParser.json();

const game = require("../flow/management");
const match = require("../models/match");

app.set('view engine', 'ejs');

router
    .get('/', (req, res) => { res.render('index'); })
    .get('/back', (req, res) => { res.render('index'); })
    .get('/create', (req, res) => { res.render('create'); })
    .get('/play', (req, res) => { res.render('play'); })
    .get('/find',(req, res) => { res.render('find'); })

    .post('/create', urlencodedParser, (req, res) =>
    {
        let novo = match( 0, 0,
            req.body.word,
            req.body.category,
            req.body.skin
            )
        game("create", novo)
        res.redirect('/');
    })
    .post('/find', urlencodedParser, (req, res) =>
    {
        let shake = {};
        function insert (item) { return resp = item; }
        async function readJSONData()
        {
            let resp = {};
            try{
                const config = await fsExtra.readJSON(process.env.database);
                return resp = config;
            } catch (error)
            {
                console.log(error);
            }
            console.log(insert(resp))
            return shake = insert(resp);
        }
        readJSONData();
        res.send(shake);
    })

module.exports = router;