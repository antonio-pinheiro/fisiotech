const Patologia = require('../models/Patologia')

// Controlador de patologia
// 
const PatologiaController = {

    // Método create
    // 
    async createPatologia(req, res) {
        // 
        const { descricao } = req.body

        try {
            const patologia = await Patologia.create(descricao)
            console.log('Patologia criada com sucesso!')
            return res.status(200).json(patologia)
        } catch (err) {
            console.log('Falha ao criar patologia...')
            return res.status(400).json(err)
        }
    },

    // Método read
    // 
    async getPatologias(req, res) {
        try {
            const patologias = await Patologia.find()
            return res.status(200).json(patologias)
        } catch (err) {
            console.log('Falha ao listar patologias...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    // 
    async getPatologiaById(req, res) {
        // Guarda o id passado como parâmetro
        const { patologia_id } = req.params

        try {
            const patologia =
                await Patologia.findById(patologia_id)
            return res.status(200).json(patologia)
        } catch (err) {
            console.log('Falha ao listar patologia...')
            return res.status(400).json(err)
        }
    },

    // Método update
    // 
    async updatePatologia(req, res) {
        // 
        const { descricao } = req.body
        const { patologia_id } = req.params

        try {
            const patologia =
                await Patologia.findByIdAndUpdate(patologia_id, descricao, { new: true })
            console.log('Patologia alterada com sucesso!')
            return res.status(200).json(patologia)
        } catch (err) {
            console.log('Falha ao alterar patologia...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    // 
    async deletePatologia(req, res) {
        // 
        const { patologia_id } = req.params

        try {
            const patologia =
                await Patologia.findByIdAndDelete(patologia_id)
            console.log('Patologia removida com sucesso!')
            return res.status(200).json(patologia)
        } catch (err) {
            console.log('Falha ao remover patologia...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador de patologia
module.exports = PatologiaController