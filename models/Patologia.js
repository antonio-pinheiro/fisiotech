const mongoose = require('mongoose')

// Schema de patologia
const Schema = new mongoose.Schema ({
    descricao: { Type: String }
})

// Export do schema de patologia
module.exports = mongoose.model('Patologia', Schema)