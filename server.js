require('dotenv').config()
require('./src/database/connection')

const fs = require("fs")
const path = require("path")
const http = require('http')

const cors = require('cors')
const logger = require ('morgan')
const bodyParser = require ('body-parser')
const express = require ('express')
const app = express()

const server = http.createServer(app)

const {APP_DEBUG: debug = true} = process.env
if(debug) app.use(logger('dev'))

app.use(cors())
app.use (bodyParser.json())
app.use (bodyParser.urlencoded({extended: true}))

fs.readdirSync(path.resolve('src/routes'))
    .filter(file => file.match(/\.js$/) !== null)
    .forEach(file => {
        app.use (require (path.join(__dirname, 'src/routes', file)));
    });


const {APP_PORT: port = 3000, APP_HOST: host = 'localhost'} = process.env;

server.listen(port, host, function () {
    console.log(`********** Server is running on  http://${host}:${port}  **********`)
});