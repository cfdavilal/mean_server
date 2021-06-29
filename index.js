const express = require('express')
const port = 3000
const app = express()

//rutas
app.get('/', (req, res)=>{
    res.send('hola mundo')
})

//creamos server

app.listen(port, () => {
  console.log('Servidor corriendo en el puerto: ' + port)
})
