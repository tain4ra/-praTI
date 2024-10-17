/* MANIPULANDO OBJETOS */

/*
    Exercicio 1: Calcular a media das notas dos alunos de um
    professor e verificar se está acima da media de aprovaçao.
    Use um loop for...in para iterar sobre as propriedades
    dentro de professor.grades. Imprima se o prof está acima
    da média de aprovaçao (considerando 6.0 como media).
*/

// const professor = {
//     name: "Tainara",
//     subject: "Inglês",
//     grades: {
//         student1: 6,
//         student2: 7,
//         student3: 4,
//         student4: 10
//         }
// }
// let sumGrades = 0
// let numStudents = 0

// for(let student in professor.grades){
//     sumGrades += professor.grades[student];
//     numStudents++;
// }

// let average = sumGrades / numStudents;

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >=6 //operador ternario
//     ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média.`
// )

// /*
//     Exercicio 2: Verificar e listar livros publicados antes de 2000.
//     Use um loop for...of para iterar o array biblioteca.
//     Imprima o titulo e o ano dos livros que atendam a condiçao.
// */
//construir um array de obj
const library = [
    {title: "Dark Matter", year: 2016},
    {title: "1984", year: 1984},
    {title: "Fahrenheit 451", year: 1953},
    {title: "The Immortalists", year: 2018}
]

for(let book of library){
    if(book.year > 2000){
        console.log(`O livro ${book.title} foi publicado em ${book.year}.`)
    }
}

/*
    Exercicio 3: Contar a quantidade de filmes por genero.
    Use o metodo forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o genero ja existe no objeto
    de contagem. Se existir, incremente a contagem; se não,
    adicione o genero ao objeto com a contagem 1.
*/
let movies = [
    {title: "ET", genre: "sci fi"},
    {title: "IT", genre: "horror"},
    {title: "Midsommar", genre: "horror"},
    {title: "Arrival", genre: "sci fi"},
    {title: "High life", genre: "sci fi"},
    {title: "Avengers", genre: "action"}
]

let genreCount = {};
//FOREACH É UM METODO DE ARRAYS
movies.forEach(movie =>{
    if (genreCount[movie.genre]){ //movie representa cada posiçao do array
        genreCount[movie.genre]++;
    } else {
        genreCount[movie.genre] = 1;
    }
});

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do genero ${genre}.`);
}