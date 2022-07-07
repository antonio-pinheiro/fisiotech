const Pacientes = require('../models/Paciente')

// Controlador Home
// Contém o método gerador dos indicadores
const HomeController = {

    // Método 
    // 
    async listChallenges(req, res) {
        // Guarda a lógica para agrupar patologias
        const group = [{
            $group: {
                _id: '$origemId',
                count: { $sum: 1 }
            }},
            {
            $group: {
                _id: '$plano.patologiaId',
                count: { $sum: 1 }
            }}]

        try {
            let indicadorOrigens = await Pacientes.aggregate([group[0]])
            return res.status(200).json(indicadorOrigens)
        } catch (err) {
            console.log('Falha ao retornar dados de desafio...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador home
module.exports = HomeController