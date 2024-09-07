// //FUNÇÕES
// /*Pode-se criar funções anonimas*/
// // let teste = function (){
// //     console.log('Olá mundo!')
// // }
// // teste()

// // function showFunction(sucessCallback, errorCallback) {
// //     if(false){
// //         sucessCallback('Requisição bem sucedida')
// // } else {
// //     errorCallback('Erro na requisição')
// //     }
// // }

// // let sucessCallback = function(message) {
// //     console.log(message)
// // }
// // let errorCallback = function(message) {
// //     console.log(message)
// // }
// // showFunction(sucessCallback, errorCallback)

// /*Exercicio 1: soma dos elementos de um array*/
// // let arrSum = function(arr){
// //     let sum = 0 //cria dentro da funçao porque é usado apenas aqui dentro
// //     for(let i = 0; i < arr.length; i++){
// //         sum += arr[i]
// //     } //tudo que é usado na funçao, cria dentro da funçao
// //     return sum //printa dentro do codigo sem aparecer para o usuario
// // }
// // let arr = [10, 20, 30, 40]
// // let sum = arrSum(arr)

// // console.log(sum)

// /*Exercicio 2: contar ocorrencias de um valor em um vetor*/
// const prompt = require('prompt-sync')()
// let arr = [10, 10, 20, 40, 50]
// let target = Number(prompt('Digite um numero de 0 a 50: '))

// let ArrOccur = function(target, arr){
//     let count = 0
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             count++
//         }
//     }
//     return count
// }

// let countOccur = ArrOccur(target, arr)

// console.log(`O valor ${target} aparece ${countOccur} vezes`)

/*MANIPULAÇAO DE STRING*/
// let nome = "Equipe Olimpica   "
// console.log("Tainara".length) //comprimento
// console.log("Tainara".charAt(1)) //caracter pela posiçao
// console.log(nome.indexOf('a')) //posiçao do caracter
// console.log(nome.replace('Tain', 'Sam')) //substituir
// console.log(nome.substr(7, 8)) //a partir da posiçao 7 extrair 8 caracteres
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// console.log('-' + nome.trim() + '-') //remove extremidades em branco da string

/*METODOS MATEMATICOS*/
// console.log(Math.ceil(100.13)) //arredonda p cima
// console.log(Math.floor(100.13)) //arredonda p baixo
// console.log(Math.round(100.13)) //arredonda p o q for + perto
// console.log(Math.sqrt(100)) //raiz quadrada
// console.log(Math.pow(100, 2)) //potenciaçao
// console.log(Math.cbrt(100)) //raiz cubica
// console.log(Math.abs(100.20)) //valor absoluto
// console.log(Math.random()) //numero aleatorio entre 0-1
// console.log(Math.random() * 100) //numero aleatorio entre 0-100

/*DATAS*/
let date1 = new Date(2024, 7, 6);
let date2 = new Date(2023, 7, 6);

console.log(date1.toString())
//Calcular dif entre 2 datas
console.log(date1.getTime()) //js seta uma data especifica na dec de 70, o numero é a quantidade de tempo a partir dessa data
console.log(date2.getTime())

let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(miliseconds_between_dates)

let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

console.log(`A diferença entre as datas é de ${miliseconds_between_dates/miliseconds_per_day} dias.`)