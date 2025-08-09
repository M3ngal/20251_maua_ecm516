const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const urlBase = 'host.docker.internal'

/*
{
    1: {
        id: 1,
        texto: 'ver um filme',
        observacoes: [
            {
                id: 1000,
                texto: 'comprar pipoca',
                lembreteId: 1
            }
        ]
    }
    2: {

    }
}
*/

const baseConsolidada = {}

const funcoes = {
    LembreteCriado: async (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacaoCriada: async (observacao) => {
        console.log(observacao)
        const observacoes = baseConsolidada[observacao.idLembrete]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: async (observacao) => {
        const observacoes = baseConsolidada[observacao.idLembrete]['observacoes']
        const indice = observacoes.findIndex(o => o.id === observacao.id)
        observacoes[indice] = observacao
    }
}

app.get('/lembretes', (req, res) => {
    res.json(baseConsolidada)
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

const port = 6000
app.listen(port, async () => {
    console.log(`Porta: ${port}`)
    const { data } = await axios.get(`http://${urlBase}:10000/eventos`)
    data.forEach(async (evento) => {
        try {
            await funcoes[evento.tipo](evento.dados)
        }
        catch(e) {
            console.log(e)
        }
    });
})