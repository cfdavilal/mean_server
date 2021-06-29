const express = require('express')
const connDB = require('./config/db')
const port = 3000

//server
const app = express()

//BD
connDB()

app.use(express.json())
app.use('/api/productos', require('./routes/producto'))

//creamos server

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto: ' + port)
})
