const mongoose = require('mongoose')

// Schema de usuário
const Schema = new mongoose.Schema ({
    email: { Type: String },
    password: { Type: String }
})

// Export do schema de usuário
module.exports = mongoose.model('Usuario', Schema)