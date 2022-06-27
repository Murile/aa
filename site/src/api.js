import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export function postar(n){
    const resposta = api.post('/anime',{
        nome:n
    })
    return resposta
}

export function consultar(){
    const resposta = api.get('/consulta')
    return resposta
}