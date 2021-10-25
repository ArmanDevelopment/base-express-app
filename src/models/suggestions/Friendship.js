const Suggestion = require('./Suggestion')
const {Schema, Types: DataTypes} = require('mongoose')

const friendshipSchema = new Schema({
    requester: {
        ref: 'profile',
        type: Schema.Types.ObjectId
    },
    recipient: {
        ref: 'profile',
        type: Schema.Types.ObjectId
    },
})

module.exports = Suggestion.discriminator('friendship', friendshipSchema)