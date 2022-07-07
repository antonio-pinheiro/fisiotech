const mongoose = require('mongoose')

// Schema do paciente
const Schema = new mongoose.Schema({
    nome: { Type: String },
    telefone: { Type: String },
    idade: { Type: String },
    email: { Type: String },
    origemId: { Type: String },
    plano: [{ Type: Array }, {
        patologiaId: { Type: String },
        atencao: { Type: String },
        qtd_sessoes: { Type: String },
        vl_sessao: { Type: String },
        evolucao: { Type: String },
        pagamento: { Type: String },
        sessoes: [{ Type: Array }, {
            data: { Type: Date },
            hora: { Type: String },
            fisioterapeuta: { Type: String },
            pago: { Type: Boolean },
            compareceu: { Type: Boolean, default: false}
        }]
    }]
})

// Export do schema do paciente
module.exports = mongoose.model('Paciente', Schema)