/*
Contabilizando Elementos com uma Condição
    Objetivo: Crie um array de objetos clientes, cada um com propriedades
    nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
    de 30 anos.
*/

let clientes = [
    {nome: "Jacira", idade: "65", cidade: "Jundiaí"},
    {nome: "Jucélia", idade: "28", cidade: "Erechim"},
    {nome: "Jandira", idade: "20", cidade: "São Paulo"},
    {nome: "Juvelina", idade: "40", cidade: "Três Barras"},
    {nome: "Janete", idade: "32", cidade: "Chapecó"},
    {nome: "Josicléia", idade: "60", cidade: "Porto Alegre"},
    {nome: "Josiane", idade: "57", cidade: "Carazinho"},
    {nome: "Joana", idade: "19", cidade: "Xaxim"},
]

let clientes30Mais = 0

clientes.forEach(cliente =>{
    if (cliente.idade > 30){
        clientes30Mais++;
    }
})

console.log(`Há ${clientes30Mais} clientes com mais de 30 anos.`)