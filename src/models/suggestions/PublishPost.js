const Suggestion = require('./Suggestion')
const {Schema, Types: DataTypes} = require('mongoose')

const postSchema = new Schema({
    post: {
        ref: 'profile',
        type: DataTypes.ObjectId
    }
})

module.exports = Suggestion.discriminator('post', postSchema)