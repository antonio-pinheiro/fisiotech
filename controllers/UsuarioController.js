const Usuario = require('../models/Usuario')

// Controlador do usuário
// Contém os métodos para CRUD de usuários
const UsuarioController = {

    // Método create
    // Armazena um usuário no banco de dados
    async createUsuario(req, res) {
        // Guarda o corpo da requisição
        const { email, password } = req.body
        const bodyData = (email, password)

        try {
            const usuario = await Usuario.create(bodyData)
            console.log('Usuário criado com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao criar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método read
    // Lista todos os usuários armazenados
    async getUsuarios(req, res) {
        try {
            const usuarios = await Usuario.find()
            return res.status(200).json(usuarios)
        } catch (err) {
            console.log('Falha ao listar usuários...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    // Lista o usuário pelo seu identificador único
    async getUsuarioById(req, res) {
        // Guarda o id passado na requisição
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findById(usuario_id)
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao listar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método update
    // Altera os dados de um usuário armazenado
    async updateUsuario(req, res) {
        // Guarda o corpo e o id passados na requisição
        const { email, password } = req.body
        const bodyData = (email, password)
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findByIdAndUpdate(usuario_id, bodyData, { new: true })
            console.log('Usuário alterado com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao alterar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    // Remove os dados de um usuário do banco de dados
    async deleteUsuario(req, res) {
        // Guarda o id passado na requisição
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findByIdAndDelete(usuario_id)
            console.log('Usuário removido com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao remover usuário...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador do usuário
module.exports = UsuarioController