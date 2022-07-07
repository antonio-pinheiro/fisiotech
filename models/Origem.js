const mongoose = require('mongoose')

// Schema de origem
const Schema = new mongoose.Schema ({
    descricao: { Type: String }
})

// Export do schema de origem
module.exports = mongoose.model('Origen', Schema)