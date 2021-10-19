const {DB_CONNECTION: connection} = process.env
const db = require(`./${connection}/dbConnection`)

db.connect()