const mongoose = require('mongoose')

const schema = mongoose.Schema({
  user: String,
  password: String
})

const model = mongoose.model('users', schema)

module.exports = model