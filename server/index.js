require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

    const app = express();

    const {CONNECTION_STRING} =process.env

    app.use(bodyParser.json())

    massive(CONNECTION_STRING).then(db => {
        app.set('db', db)
        console.log('connected')
    })
    // app.get('/api/houses', controller.gethouses)
    // app.post('/api/houses/:id', controller.addhouses)
    // app.delete('/api/houses/:id', controller.deletehouses)


    app.listen(4000, () => {
        console.log('Listening on port 4000')
    })