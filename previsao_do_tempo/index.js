const q = 'Itu'
const appId = 'fc85e11b8933c0299837e9f159d782c3'
const cnt = '2'
const units = 'metric'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const lang = 'pt_br'
const url = `https://${baseURL}?q=${q}&appid=${appId}&cnt=${cnt}&units=${units}&lang=${lang}`
console.log(url)