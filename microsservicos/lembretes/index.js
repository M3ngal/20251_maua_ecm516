const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const urlBase = 'host.docker.internal'

/* 
{
    1: {
        id: 1,
        texto: 'fazer café'
    },
    2: {
        id: 2
        texto: 'ir à feira'
    }
}
*/

const baseLembretes = {}
let id = 1
//GET /lembretes () => {}
//localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})
//localhost:4000/lembretes
//POST /lembretes () => {}
app.post('/lembretes', (req, res) => {
    //1. pegar o texto que veio da requisição
    const { texto } = req.body
    //2. construir um objeto com id e texto
    const lembrete = {
        id,
        texto: texto
    }
    //3. cadastrar o objeto na base, no formato visto ali em cima
    baseLembretes[id] = lembrete
    //4. incrementar o id para proxima vez
    id++
    axios.post(`http://${urlBase}:10000/eventos`, {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
    .then((resAxios) => {
        
    })
    .catch((e) => {
        console.log("Erro: ", e)
    })
    .finally(() => {
        //5. devolver o objeto recém criado
        res.status(201).json(lembrete)  
    })
})

//POST /eventos
app.post('/eventos', (req, res) => {
    console.log("Evento recebido: ", req.body)
    res.end()
})

const port = 4000
app.listen(port, () => {
    console.log('Nova Versão')
    console.log('Agora usando o Docker Hub')
    console.log(`Lembretes. Porta ${port}`)
})