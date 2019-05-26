const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LinkSchema = new Schema({
    url: String,
    description: String
})

const LinkModel = mongoose.model('Link', LinkSchema) 

module.exports = LinkModel