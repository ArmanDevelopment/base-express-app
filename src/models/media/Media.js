const mongoose = require('mongoose')
const {Schema, Types: DataTypes} = mongoose

let mediaSchema = new Schema({
    name: String,
    owner: {
        ref: 'users',
        type: DataTypes.ObjectId
    }
})

module.exports = mongoose.model('media', mediaSchema)