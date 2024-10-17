/*
Modificando Objetos em um Array
    Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
    preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
    os produtos e exibir o novo preço.
*/

let produtos = [
    {nome: "Melancia", preco: 5, desconto: 0},
    {nome: "Banana", preco: 3, desconto: 0},
    {nome: "Maça", preco: 7, desconto: 0},
    {nome: "Abacate", preco: 10, desconto: 0},
]
produtos.forEach(produto =>{
    produto.desconto = 0.1;
    let novoPreco = produto.preco * (1 - produto.desconto);
    console.log(`${produto.nome} com 10% de desconto, de ${produto.preco} por ${novoPreco.toFixed(2)}`)
})
