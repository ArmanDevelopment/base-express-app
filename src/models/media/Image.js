const {Schema, Types: DataTypes} = require('mongoose')
const Media = require('./Media')

let imageSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['jpg', 'png', 'jpeg'],
    },
    path: {
        type: String,
        required: true
    }
})

module.exports = Media.discriminator('image', imageSchema)