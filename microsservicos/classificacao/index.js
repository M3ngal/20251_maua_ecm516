const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const urlBase = 'ecm516-barramento-de-eventos-service'

const funcoes = {
    ObservacaoCriada: async (observacao) => {
        const { texto } = observacao
        observacao.status = observacao.texto.includes('importante') ? 'importante' : 'comum'
        await axios.post(`http://${urlBase}:10000/eventos`, {
            tipo: 'ObservacaoClassificada',
            dados: observacao
        })
    }
}

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

const port = 7000
app.listen(port, () => { console.log(`Classificação. Porta: ${port}`) })