require('dotenv').config()
const {DB_CONNECTION: connection} = process.env
const mongodbConfig = require (`./src/database/connections/${connection}/dbConfig`)
const path = require("path");

module.exports = {
    mongodb: {
        url: mongodbConfig.uri,
        options: {
            ... mongodbConfig.options
        }
    },
    migrationsDir: path.resolve("src/database/migrations"),
    changelogCollectionName: "changelog"
}