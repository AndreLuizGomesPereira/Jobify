const { request, response } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'ejs') // Para renderizar HTML em outros arquivos.
app.use(express.static('public')) // Caso não encontrar nada no GET, pega da pasta pública

app.get('/', (request, response) => {
    // response.send('<div><h1>Olá Mundo, hoje</h1></div>') Forma sem EJS.
    response.render('home', {
    })
})

app.get('/vaga', (request, response) => {
    response.render('vaga', {
    })
})

app.listen(3000, (err) => {
    if (err) {
        console.log('Não foi possível comunicar ao servidor!')
    } else {
        console.log('Servidor do Jobify funcionando normalmente!')
    }
})