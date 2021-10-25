require('dotenv').config()
const {DB_CONNECTION: connection} = process.env

module.exports = require(`./${connection}/dbConnection`).connect()