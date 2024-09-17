/*
Iterando Sobre Arrays de Objetos
    Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
    uma pessoa com nome, idade, e cidade. Use for of para exibir as
    informações de cada pessoa no console.
*/
let pessoas = [
    {
        nome: "Tainara",
        idade: 29,
        cidade: "Erechim",
    },
    {
        nome: "Murilo",
        idade: 28,
        cidade: "Erechim",
    },
    {
        nome: "Gabriela",
        idade: 28,
        cidade: "Blumenau",
    },
    {
        nome: "Ana",
        idade: 28,
        cidade: "Iporã do Oeste",
    },
    {
        nome: "Natália",
        idade: 27,
        cidade: "Erechim",
    },
]

for(let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade} anos, Cidade: ${pessoa.cidade}.`)
}