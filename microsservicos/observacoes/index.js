const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())
/*
{
    1: [
        {
        id: 1001,
        idLembrete: 1,
        texto: Sem açúcar
        },
        {
        id: 1002, idLembrete: 1, texto: Comprar o pó
        }
    ],
    2: []
}
*/
const baseObservacoes = {}
//GET /lembretes/1/observacoes
app.get('/lembretes/:idLembrete/observacoes', (req, res) => {
    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])
})

//POST
app.post('/lembretes/:idLembrete/observacoes', (req, res) => {
    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao,
        texto: texto,
        idLembrete: idLembrete
    }
    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    res.status(201).json(observacoes)
})
const port = 5100
app.listen(port, () => {
    console.log(`Porta: ${port}`)
})