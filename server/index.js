const express = require('express')
const sequelize = require('./db')
const router = require('./router')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/', router)

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server rodando na porta ${PORT}`)
    })
})