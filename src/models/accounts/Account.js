const mongoose = require('mongoose')
const {Schema, Types: DataTypes} = mongoose

let accountSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    permitted: {
        type: Boolean,
        default: false
    },
    profile: {
        ref: 'profile',
        required: true
    }
})

module.exports = mongoose.model('account', accountSchema)