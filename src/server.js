const express = require("express")
const server = express()

server.get('/', (request, response) => {
    console.log('entrei no index')

    return  response.send('deu certo')
})

server.listen(3000, () =>  console.log('rodando'))

