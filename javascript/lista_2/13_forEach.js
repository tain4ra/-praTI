/*
Implementando um Carrinho de Compras
    Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
    array de objetos. Cada objeto dentro de itens deve representar um
    produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
    para calcular o valor total do carrinho.
*/
let carrinhoCompras = {
    itens: [
    {produto: "queijo brie", quantidade: 2, precoUn: 80},
    {produto: "queijo parmesão", quantidade: 1, precoUn: 70},
    {produto: "queijo gouda", quantidade: 3, precoUn: 75},
    {produto: "queijo provolone", quantidade: 4, precoUn: 65},
    {produto: "queijo minas", quantidade: 5, precoUn: 50},
]}

let totalCarrinho = 0

carrinhoCompras.itens.forEach((item) =>{
    totalCarrinho += item.quantidade * item.precoUn
});

console.log(`Valor total do carrinho: R$${totalCarrinho.toFixed(2)}`)