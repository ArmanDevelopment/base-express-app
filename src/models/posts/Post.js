const mongoose = require('mongoose')
const {Schema, Types: DataTypes} = mongoose

let postSchema = new Schema({
    title: String,
    description: String,
    media: [{
        ref: 'media',
        type: DataTypes.ObjectId
    }],
    author: {
        ref: 'profile',
        type: DataTypes.ObjectId
    }
})

module.exports = mongoose.model('posts', postSchema)