require('dotenv').config();
const express = require('express');
const path = require('node:path');
const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

const gameRouter = require('./routers/games');
app.use('/', gameRouter);

app.use((req, res) =>
{    res.status(404).render('notfound');    })


app.listen(process.env.PORT, () =>{
    console.log(`running in port: ${process.env.PORT}...`)
});
    
    // const jotaesse = path.join(__dirname, 'public');
    // console.log(jotaesse)
    // app.use(express.static(jotaesse));