const Paciente = require('../models/Paciente')

// Controlador do paciente
// Contém os métodos para CRUD de pacientes
const PacienteController = {
    
    // Método create
    // Armazena um paciente no banco de dados
    async createPaciente(req, res) {
        // Guarda o corpo da requisição
        const { nome, telefone, idade, email, origemId, patologiaId, atencao, qtd_sessoes, vl_sessao, evolucao, pagamento, data, hora, fisioterapeuta, pago, compareceu } = req.body
        const bodyData = (nome, telefone, idade, email, origemId, patologiaId, atencao, qtd_sessoes, vl_sessao, evolucao, pagamento, data, hora, fisioterapeuta, pago, compareceu)

        try {
            const paciente = await Paciente.create(bodyData)
            console.log('Paciente criado com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao criar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método read
    // Lista todos os pacientes armazenados
    async getPacientes(req, res) {
        try {
            const pacientes = await Paciente.find()
            return res.status(200).json(pacientes)
        } catch (err) {
            console.log('Falha ao listar pacientes...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    // Lista o cliente pelo seu identificador único
    async getPacienteById(req, res) {
        // Guarda o id passado na requisição
        const { paciente_id } = req.params
        
        try {
            const paciente = await Paciente.findById(paciente_id)
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao listar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método update
    // Altera os dados de um paciente armazenado
    async updatePaciente(req, res) {
        // Guarda o corpo e o id passados na requisição
        const { nome, telefone, idade, email, origemId, patologiaId, atencao, qtd_sessoes, vl_sessao, evolucao, pagamento, data, hora, fisioterapeuta, pago, compareceu } = req.body
        const bodyData = (nome, telefone, idade, email, origemId, patologiaId, atencao, qtd_sessoes, vl_sessao, evolucao, pagamento, data, hora, fisioterapeuta, pago, compareceu)
        const { paciente_id } = req.params

        try {
            const paciente =
                await Paciente.findByIdAndUpdate(paciente_id, bodyData, { new: true })
            console.log('Paciente alterado com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao alterar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    // Remove os dados de um paciente do banco de dados
    async deletePaciente(req, res) {
        // Guarda o id passado na requisição
        const { paciente_id } = req.params

        try {
            const paciente =
                await Paciente.findByIdAndDelete(paciente_id)
            console.log('Paciente removido com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao remover paciente...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador do paciente
module.exports = PacienteController