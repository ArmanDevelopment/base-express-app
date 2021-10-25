const mongoose = require('mongoose')
const {Schema, Types: DataTypes} = mongoose

let profileSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    role: {
        ref: 'role',
        type: DataTypes.ObjectId,
        required: true
    },
    avatar: {
        ref: 'media',
        type: DataTypes.ObjectId,
        default: null
    },
    account: {
        ref: 'account',
        type: DataTypes.ObjectId,
        required: true
    },
    posts: [{
        ref: 'post',
        type: DataTypes.ObjectId,
        default: null
    }],
    friends: [{
       ref: 'profile',
       type: DataTypes.ObjectId,
        default: null
    }]
})

module.exports = mongoose.model('profile', profileSchema)