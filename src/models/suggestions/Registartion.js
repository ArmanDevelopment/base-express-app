const Suggestion = require('./Suggestion')
const {Schema, Types: DataTypes} = require('mongoose')

const registerSchema = new Schema({
    profile: {
        ref: 'profile',
        type: DataTypes.ObjectId
    }
})

module.exports = Suggestion.discriminator('registration', registerSchema)