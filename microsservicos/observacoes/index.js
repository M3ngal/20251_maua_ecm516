const axios = require('axios')
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const urlBase = 'ecm516-barramento-de-eventos-service'

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

const funcoes = {
    ObservacaoClassificada: async (observacao) => {
        const observacoes = baseObservacoes[observacao.idLembrete]
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status
        await axios.post(`http://${urlBase}:10000/eventos`, {
            tipo: 'ObservacaoAtualizada',
            dados: observacao
        })
    }
}

const baseObservacoes = {}
//GET /lembretes/1/observacoes
app.get('/lembretes/:idLembrete/observacoes', (req, res) => {
    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])
})

//POST
app.post('/lembretes/:idLembrete/observacoes', async (req, res) => {
    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params
    const observacao = {
        id: idObservacao,
        texto: texto,
        idLembrete: idLembrete,
        status: 'aguardando'
    }
    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes
    await axios.post(`http://${urlBase}:10000/eventos`, {
        tipo: "ObservacaoCriada",
        dados: observacao
    })
    res.status(201).json(observacoes)
})

app.post('/eventos', async (req, res) => {
    try {
        const evento = req.body
        console.log(evento)
        await funcoes[evento.tipo](evento.dados)
    }
    catch(e) {
        console.log(e)
    }
    finally {
        res.end()
    }

})

const port = 5100
app.listen(port, () => {
    console.log(`Porta: ${port}`)
})