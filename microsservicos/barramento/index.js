const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const eventos = []
app.post('/eventos', async (req, res) => {
    //1. pegar o evento
    const evento = req.body
    console.log(evento)
    eventos.push(evento)
    //2. enviar o evento para o ms de lembretes
    try {
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch (e) {
        console.log(e)
    }
    //3. enviar o evento para o ms de observações
    try {
        await axios.post('http://localhost:5100/eventos', evento)
    }
    catch (e) {
        console.log(e)
    }
    //4. enviar o evento para o ms de consulta
    try {
        await axios.post('http://localhost:6000/eventos', evento)
    }
    catch (e) {
        console.log(e)
    }
    //5. enviar o evento para o ms de classificacao
    try {
        await axios.post('http://localhost:7000/eventos', evento)
    }
    catch (e) {
        console.log(e)
    }
    //6. "respoder"
    res.end()
})

app.get('/eventos', (req, res) => {
    res.json(eventos)
})

const port = 10000
app.listen(port, () => {
    console.log(`Barramento. Porta ${port}.`)
})