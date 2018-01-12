const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlsList = new Schema({
  urls: {
    original: String,
    shorty: String,
  }
}, {
  collection: 'urlsData'
})

module.exports = mongoose.model('urlsList', urlsList)
