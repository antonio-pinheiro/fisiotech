const Origem = require('../models/Origem')

// Controlador de origem
// Contém as operações de CRUD de origens
const OrigemController = {

    // Método create
    // Armazena uma origem no banco de dados
    async createOrigem(req, res) {
        // Guarda o corpo da requisição
        const { descricao } = req.body

        try {
            const origem = await Origem.create(descricao)
            console.log('Origem criada com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao criar origem...')
            return res.status(400).json(err)
        }
    },

    // Método read
    // 
    async getOrigens(req, res) {
        try {
            const origens = await Origem.find()
            return res.status(200).json(origens)
        } catch (err) {
            console.log('Falha ao listar origens...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    // 
    async getOrigemById(req, res) {
        // Guarda o id passado como parâmetro
        const { origem_id } = req.params

        try {
            const origem =
                await Origem.findById(origem_id)
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao listar origem...')
            return res.status(400).json(err)
        }
    },

    // Método update
    // 
    async updateOrigem(req, res) {
        // Guarda o corpo e id passados na requisição
        const { descricao } = req.body
        const origem_id = req.params

        try {
            const origem =
                await Origem.findByIdAndUpdate(origem_id, descricao, { new: true })
            console.log('Origem alterada com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao alterar origem...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    // Remove os dados de uma origem do banco de dados
    async deleteOrigem(req, res) {
        // Guarda o id passado como parâmetro
        const origem_id = req.params

        try {
            const origem =
                await Origem.findByIdAndDelete(origem_id)
            console.log('Origem removida com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao remover origem...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador de origem
module.exports = OrigemController