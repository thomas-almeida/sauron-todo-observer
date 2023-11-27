const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const router = require('./router')

const app = express()
const PORT = process.env.PORT || 3001
const corsOptions = {
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/', router)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server rodando na porta ${PORT}`)
    })
})