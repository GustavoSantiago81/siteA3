const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express()

// const routerEmpresa = require('./routes/empresas')
// const router = require('./routes/users')

dotenv.config()

const port = process.env.DB_PORT || 8800;

app.use(cors())
app.use(express.json())

app.use('/', router)
app.use('/', routerEmpresa)

app.listen( port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = {
    app
}