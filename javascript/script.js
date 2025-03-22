// 1 + 2 + 3 + ... + (n - 2) + (n - 1) + n 
const calculoRapidinho = (n) => {
    //caso n seja negativo, devolva uma promise no estado rejected com a mensagem de erro: "Apenas positivos, por favor"
    //Case contrario, mantenha o que já está pronto
    //sem if else ou switch case
    return (n > 0? Promise.resolve((n/2) * (n+1)):Promise.reject("Apenas positivos, por favor"))  
    // return new Promise((resolve,reject)=>{
    //     resolve(n/2 * (n+1))
    // })
}
const resultado = calculoRapidinho(-10)
resultado.then(res =>{
    console.log(`Funcionou: ${res}`)
})
.catch((err)=>{
    console.log(`Erro: ${err}`)
})
// function calculoDemorado(n){
//     const p = new Promise((resolve,reject) => {
//         let ac = 0
//         for(let i=1;i<=n; i++) ac += i
//         resolve(ac)
//     })
//     return p
// }

// const resultado = calculoDemorado(10)
// resultado.then((res) => {
//     console.log(`Funcionou: ${res}`)
//     calculoDemorado(res).then(res2 => {
//         console.log(`Funcionou: ${res2}`)
//     })
// })
// .catch(function(err){
//     console.log(`Erro: ${err}`)
// })

// console.log("continuo fazendo outras coisas enquanto isso...")

// class Pessoa{
//     public void andar(){}
// }
// while(true){
//     new Pessoa()
// }
// Pessoa p = null
// p.andar()

// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro ,conteudo) => {
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = erro => {
//                 if(erro){
//                     console.log(`A escrita deu erro: ${erro}`)
//                 }
//                 else{
//                     console.log('A escrita funcionou')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     } //callback
//     //assincrona
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("Fim da função exibirConteudo")
// }
// abrirArquivo("arquivo.txt")


//processamento síncrono (bloqueante) e processamento assíncrono (não bloqueante)
//IO-Bound: Input/Output
//CPU-Bound

// const oi = () => console.log('oi')

// console.log('Começou...')
// oi()
// console.log('Terminou...')


// //Uma calculadora que faz as somas de soma e subtração, cada uma envolvendo apenas dois operandos.
// //1. A soma deve ser função regular (function)

// const calculadora = {
//     soma : function soma(a,b){return a + b},
//     subtracao : (a,b) => a - b
// }

// console.log(calculadora.soma(2,3))
// console.log(calculadora.subtracao(5,3))

// const eIssoAqui = calculadora.soma
// console.log(eIssoAqui(4,5))

//Uma concessionaria tem CNPJ e endereço. Ela possui alguns carros. Cada carro tem marca, modelo e ano de fabricação

// const concessionaria = {
//     cnpj : 'XXXX.XXXX.XXXX',
//     endereco : {
//         logradouro : "Rua B",
//         numero : 22
//     },
//     carros : [
//         {
//             marca : "Toyota",
//             modelo : 'HRV',
//             ano_de_fabricacao: 2014
//         },
//         {
//             marca : "Fiat",
//             modelo : 'Argo',
//             ano_de_fabricacao: 2016
//         },
//         {
//             marca : "Chevrolet",
//             modelo : 'Onyx',
//             ano_de_fabricacao: 2021
//         }
//     ]
// }

// console.log(concessionaria.carros[1])

// for (let i = 0; i < concessionaria.carros.length; i++){
//     console.log(concessionaria.carros[i].modelo)
// }


// for (let carro of concessionaria.carros){
//     console.log(carro.marca)
// }

//Uma pessoa se chama maria, tem 21 anos e mora na rua B, numero 121, bairro J

// const pessoa = {
//     nome : "Maria",
//     idade: 21,
//     'endereco da pessoa' : {
//         logradouro : 'Rua B',
//         numero : 121,
//         bairro : {
//             nome: 'J'
//         },
//         cidade : {
//             nome : "Itu",
//             populacao : 70000
//         }
//     }

// }

// // console.log(pessoa.endereco.bairro.nome)
// console.log(pessoa['endereco da pessoa']['cidade']['populacao'])
// console.log(pessoa.endereco['cidade'].nome)

//Uma pessoa que se chama João e tem 17 anos

// const pessoa = {
//     nome : "João",
//     idade : 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     //cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1,f2}
// }

// const eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

// const saudacoesFactory = (saudacao, nome) => () => {console.log(`${saudacao}, ${nome}`)}
// const olaJoao = saudacoesFactory('Ola', 'João')
// const adeusJoao = saudacoesFactory('Adeus', 'João')
// olaJoao()
// adeusJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f(funcao){
//     return funcao()

// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         function exibeUm(){
//             return 1
//         }
//         return exibeUm
//     }
//     return outraFuncao
// }
// // const gResult = g()
// // gResult()

// // f(g())

// // g()()

// console.log(f(g()()))

// f(function(){console.log('Fui passada para f')})

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

//programação imperativa
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//produza um novo vetor que contenha somente os nomes que começam com A
//faça usando um for

// for(let i = 0; i< nomes.length; i++){
//     if(nomes[i].substring(0,1) === 'A'){
//         console.log(nomes[i])
//     }

// }

//produza um novo vetor que, para cada elemento do vetor nomes, contenha sua letra inicial

// const nomes2 = []
// for(let i = 0; i< nomes.length; i++){
//     nomes2.push(nomes[i].charAt(0))

// }

// console.log(nomes2)


//programação declarativa

//ex 1

//filter sempre fará uma condicional

// const resultante = nomes.filter(nome => nome.startsWith('A') || nome.startsWith('a')) //O(1)
// //const resultante = nomes.filter(n => n.toLowerCase().startsWith('a')) O(n)
// console.log(resultante)

//ex 2

//map sempre produzirá um novo vetor com o mesmo número de elementos do vetor existente

// const resultante2 = nomes.map(function(n){
//     return n[0]
// })

//ex 3

//every checa se todos os elementos cumprem uma condição

// const resultado = nomes.every(n => n.startsWith('A'))
// console.log(resultado)

//ex4

//some checa se algum elemento cumpre uma condição

// const resultado2 = nomes.some(n => n.startsWith('A'))
// console.log(resultado2)

//ex 5

//reduce precisa de um acumulador e um valor para reduzir o vetor

// const valores = [1, 2, 3 ,4]
// const soma = valores.reduce((ac,v) => ac + v)
// console.log(soma)



//função regular (mais antigo, você faz com function)
//arrow function => ==
// const triplo = (n = 10) => 3 * n
// console.log(triplo(10))
// const dobro = (valor) => {return 2 * valor}
// console.log(dobro(6))
// const ex3 = a => 2 + 2
// console.log(ex3())
// const ex2 = a => console.log(a)
// ex2()
// const ex1 = a => {console.log(a)}
// ex1(1)
// () => {}
//função anônima
// const triplo = function (n = 5) {
//     return 3 * n
// }
// console.log(triplo(10))
// console.log(triplo())
// const dobro = function (n) {
//     return 2 * n
// }
// console.log(dobro(5))
// function soma(a, b = 5) {
//     return a + b
// }
// console.log(soma(2, 3))
// console.log(soma(2))
// function hello(){
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('Oi, ' + nome)
// }
// hello('Ana')
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// v1[10] = true
// console.log(v1.length)
// console.log(v1)
// for(let i = 1; i < v1.length; i++)
//     console.log(v1[i])

//== ou ===
// console.log([] == [])
// console.log([] == false)
// console.log(undefined == null)
// console.log(undefined == undefined)
// console.log(null == null)
// //null e undefined
// console.log(1 == [1])
// console.log(true == 2)
// console.log(1 === '1')
// console.log(1 === 1)
// console.log(1 == '1')
// console.log(1 == 1)

// const n1 = 2
// const n2 = '3'
// //coerção implicita 
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

//e o var
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = 'André'
//     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log('Tchau, ' + nome + '.')
// var linguagem = "javascript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem}`)
//var a = 2
//a = 3
//console.log(a)
//declarando constantes
//let ou var
//let a = 2
// a = 3
// console.log(a)
// a = '4'
// console.log(a)
//const nome = 'José' //"José"
//console.log(nome)
//nome = 'Pedro'
//console.log(nome)