const {DB_CONNECTION: connection} = process.env

require(`./${connection}/dbConnection`).connect()
