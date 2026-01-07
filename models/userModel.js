let mongoose = require('mongoose')

// mongodb schema
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

let User = mongoose.model('users', userSchema)

module.exports = User;