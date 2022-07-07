const HomeController = require('../controllers/HomeController')
const PacienteController = require('../controllers/PacienteController')
const OrigemController = require('../controllers/OrigemController')
const PatologiaController = require('../controllers/PatologiaController')
const UsuarioController = require('../controllers/UsuarioController')
const AuthController = require('../controllers/AuthController')
const { Router } = require('express')
const routes = Router()

// Rota para desafios
routes.get('/home', HomeController.listChallenges)

// Rotas para paciente
routes.post('/pacientes', PacienteController.createPaciente)
routes.get('/pacientes', PacienteController.getPacientes)
routes.get('/pacientes/:paciente_id', PacienteController.getPacienteById)
routes.put('/pacientes/:paciente_id', AuthController.authenticate, PacienteController.updatePaciente)
routes.delete('/pacientes/:paciente_id', AuthController.authenticate, PacienteController.deletePaciente)

// Rotas para origem
routes.post('/origens', AuthController.authenticate, OrigemController.createOrigem)
routes.get('/origens', OrigemController.getOrigens)
routes.get('/origens/:origem_id', OrigemController.getOrigemById)
routes.put('/origens/:origem_id', AuthController.authenticate, OrigemController.updateOrigem)
routes.delete('/origens/:origem_id', AuthController.authenticate, OrigemController.deleteOrigem)

// Rotas para patologia
routes.post('/patologias', PatologiaController.createPatologia)
routes.get('/patologias', PatologiaController.getPatologias)
routes.get('/patologias/:patologia_id', PatologiaController.getPatologiaById)
routes.put('/patologias/:patologia_id', AuthController.authenticate, PatologiaController.updatePatologia)
routes.delete('/patologias/:patologia_id', AuthController.authenticate, PatologiaController.deletePatologia)

// Rotas para usuário
// Requer autenticação para maioria
routes.post('/usuarios', AuthController.authenticate, UsuarioController.createUsuario)
routes.get('/usuarios', AuthController.authenticate, UsuarioController.getUsuarios)
routes.get('/usuarios/:usuario_id', AuthController.authenticate, UsuarioController.getUsuarioById)
routes.put('/usuarios/:usuario_id', AuthController.authenticate, UsuarioController.updateUsuario)
routes.delete('/usuarios/:usuario_id', AuthController.authenticate, UsuarioController.deleteUsuario)

// Rota para autenticação
routes.post('/auth', AuthController.createToken)

// Export das rotas
module.exports = routes 