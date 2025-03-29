// //async/await
// const fatorial = (n) => {
//     if(n < 0) return Promise.reject('Apenas valores positivos')
//         //return Promise.resolve(res)
//     return new Promise((resolve,reject) => {
//         let res = 1
//         for(let i = 2; i <= n; i++) res *= i
//         resolve(res)
//     })
// }

// // const comThenCatch = () => {
// //     fatorial(10)
// //     .then( res => console.log(`Resultado: ${res}`))
// //     .catch( err => console.log(`Erro: ${err}`))

// //     fatorial(-10)
// //     .then( res => console.log(`Resultado: ${res}`))
// //     .catch( err => console.log(`Erro: ${err}`))
// // }
// // comThenCatch()

// const comAsynAwait = async () => {
//     try{

//         const f1 = await fatorial(10)
//         console.log(f1)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
//     try{

//         const f2 = await fatorial(-10)
//         console.log(f2)
//     }
//     catch(err){
//         console.log(`Erro: ${err}`)
//     }
// }
// comAsynAwait()

// const hello = async () => {
//     return `Oi ${nome}`
// }
// async function hello(nome){
//     return `Oi ${nome}`
// }
// hello('Ana').then(res => console.log(res))
// //sincrono
// // const res = hello('Ana')
// // console.log(res)
// console.log('Acabou')


// const axios = require('axios')
// const n = 1743260400
// console.log(new Date(n *1000).toISOString())
// const q = 'Itu'
// const appId = 'fc85e11b8933c0299837e9f159d782c3'
// const cnt = '2'
// const units = 'metric'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const lang = 'pt_br'
// const url = `https://${baseURL}?q=${q}&appid=${appId}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// axios.get(url)
// .then((res) => {
//     console.log(res.data)
//     console.log("***************************************")
//     return res.data
    
// })
// .then(function(res){
//     console.log(`Count: ${res.cnt}`)
//     console.log("***************************************")
//     return res
// })
// .then(abc =>{
//     // mostrar a temperatura máxima da primeira previsão
//     //devolver apenas a lista de previsões a seguir
//     console.log(abc.list[0].main.temp_max)
//     console.log("***************************************")
//     return abc
// })
// .then( res => {
//     // para cada previsão, mostrar:
//     //descrição, sensação térmica, nascer e pôr do sol res.weather.description res.main.feels_like
//    for(i in res.list){
//     console.log(`Descrição: ${res.list[i].weather[0].description}`)
//     console.log(`Sensação térmica: ${res.list[i].main.feels_like}\u00B0`)
//    }
//    console.log(`Nascer do sol: ${new Date(res.city.sunrise * 1000).toLocaleTimeString()}`)
//    console.log(`Pôr do sol: ${new Date(res.city.sunset * 1000).toLocaleTimeString()}`)
    
// })