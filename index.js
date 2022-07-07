const routes = require('./routes/Routes')
const bodyParser = require('body-parser')
// Requires necessários para o swagger
const swaggerFile = require('./docs/swagger_output.json')
const swaggerUI = require('swagger-ui-express')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routes)
app.use(bodyParser.urlencoded({ extended: false }))
// Configuração da rota do swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

// Chamada do método de conexão
connection()
startServer()

// Método connection
// Faz a conexão com o banco de dados MongoDB
async function connection() {
    try {
        mongoose.connect
            (process.env.DB_FISIOTECH, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Conexão com mongodb realizada com sucesso!')
    } catch (err) {
        console.log('Falha ao realizar conexão com mongodb...')
        console.log(err)
    }
}

async function startServer() {
    try {
        app.listen(3500)
        console.log('Servidor inciado com sucesso!')
    } catch (err) {
        console.log('Falha ao iniciar servidor...')
        console.log(err)
    }
}