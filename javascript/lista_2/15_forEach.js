/*
Filtrando e Somando Valores
    Objetivo: Crie um array de objetos transacoes, onde cada transação tem
    tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
    somando as entradas e subtraindo as saídas.
*/

let transacoes = [
    {tipo: "entrada", valor: 10},
    {tipo: "saída", valor: 5},
    {tipo: "entrada", valor: 100},
    {tipo: "saída", valor: 15},
    {tipo: "saída", valor: 25},
    {tipo: "entrada", valor: 80},
    {tipo: "entrada", valor: 70},
]

let saldo = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldo += transacao.valor;
    } else if (transacao.tipo === "saída") {
        saldo -= transacao.valor
    }
})

console.log(`O saldo final é de R$${saldo}.`)