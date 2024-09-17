/*
Criando Relatórios com Objetos e Arrays
    Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
    quantidade e valor. Use forEach para calcular o valor total de vendas de
    todos os produtos.
*/

let vendas = [
    {produto: "vinho", quantidade: 10, valor: 50},
    {produto: "pão", quantidade: 45, valor: 5},
    {produto: "queijo", quantidade: 17, valor: 38},
    {produto: "tomate", quantidade: 26, valor: 7},
    {produto: "manjericão", quantidade: 7, valor: 18},
]
let totalVendas = 0;

vendas.forEach(venda =>{
    totalVendas += venda.quantidade * venda.valor;
})

console.log(`O valor total de vendas é R$${totalVendas.toFixed(2)}`)