const mongoose = require('mongoose')
const {Schema/*, Types: DataTypes*/} = mongoose

let roleSchema = new Schema({
    name: String,
    description: String,
    slug: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('role', roleSchema)