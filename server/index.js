require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

    const app = express();

    app.use(bodyParser.json())

    app.listen(4000, () => {
        console.log('Listening on port 4000')
    })