const mongoose = require ('mongoose')
const config = require ('./dbConfig')

mongoose.Promise = global.Promise;

async function connect () {
    try {
        await mongoose.connect(config.uri, config.options)
        console.log("********** Successfully Connected To The MongoDB **********");
    }
    catch (error) {
        console.log("********** \x1b[31mMissing DB Connection\x1b[0m ***********");
    }
}

module.exports = { connect }