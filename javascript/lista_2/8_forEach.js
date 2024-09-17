/*
Criando Novos Arrays a Partir de Objetos
    Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
    diretor, e anoLancamento. Use forEach para criar um novo array
    contendo apenas os títulos dos filmes.
*/

let filmes = [
    {titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010},
    {titulo: "Interstellar", diretor: "Christopher Nolan", anoLancamento: 2014},
    {titulo: "Get Out", diretor: "Jordan Peele", anoLancamento: 2017},
    {titulo: "Us", diretor: "Jordan Peele", anoLancamento: 2019},

]

let titulos = [];

filmes.forEach(filme =>{
    titulos.push(filme.titulo)
});

console.log(titulos)