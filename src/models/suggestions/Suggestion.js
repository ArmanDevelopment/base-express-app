const mongoose = require('mongoose')
const {Schema/*, Types: DataType*/} = mongoose

let suggestionSchema = new Schema({
    status: {
        type: String,
        enum: ['unanswered', 'abandoned', 'accepted'],
        default: 'unanswered'
    }
})

module.exports = mongoose.model('suggestion', suggestionSchema)