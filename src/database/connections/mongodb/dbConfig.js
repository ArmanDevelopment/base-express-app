const { DB_URI: uri } = process.env;

module.exports = {
    uri,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}