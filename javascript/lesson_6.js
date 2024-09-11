/*
  ctrl + ; comenta tudo de uma vez
  Estrutura condicional: repete uma vez e segue
  Estrutura de repetiçao: repete enquanto for verdadeiro dps segue
  cd = change directory - usa para mudar um arquivo de pasta
  para rodar: node lesson_6.js
  clear = limpa o terminal
  alt + seta pra cima ou pra baixo transfere a linha pra cima ou prabaixo
  () => { ... } é uma maneira mais curta de escrever uma função anônima

console.log(10 > 5)
console.log(10 < 5)
console.log(10 == '10') //TRUE//IGUAL A o java entende o conteudo da string como numero e retorna true
console.log(10 === '10') //FALSE// IDENTICO A o java considera que um é string outro é boolean, portanto diferentes
console.log(10 != '10') //FALSE // não igual a 
console.log(10 !== '10') //TRUE // não identico a

//Operadores lógicos
console.log((10 < 5) && (10 > 2)) // E
console.log((10 < 5) || (10 > 2)) // OU
console.log((10 < 5) || !(10 > 2)) // ! significa negaçao
console.log(!(10 < 5) || !(10 > 2))

let user = "Tai"
let password = "1234"

let authentication = user === "Tainara" && password === "1234"
console.log(authentication)


//Estrutura condicional simples
const grade = 61
if(grade >= 60){
    console.log("APROVADO")
}
*/

//Estrutura condicional composta
// const grade = 61
// if(grade >=60){
//     console.log("APROVADO")
// } else {
//     console.log("REPROVADO")
// }

//Se entre 18 e 32 pode realizar o concurso:
// let age = 33
// if((age >= 18) && (age <= 32)){
//     console.log("Apto a participar")
// } else {
//     console.log("Não está na faixa etária")
// }

//Operador ternario - condição ? verdadeiro: falso
// let tenaryResult = (10 < 100) ? 'Verdadeiro': 'Falso'

// Numero par ou impar
// let number = 10
// let verificar = number % 2
// if(verificar === 0){
//     console.log("Par")
// } else {
//     console.log("Impar")
// }
/*Sugestao professor - operador tenario*/
// let number = 18
// number % 2 === 0 ? console.log("PAR") : console.log("IMPAR")

// Qual o maior numero
// let num1 = 10
// let num2 = 25
// let num3 = 300
//     if (num1 >= num2 && num1 >= num3){
//         console.log("O maior numero é: " + num1);
//     } else if (num2 >= num1 && num2 >= num3) {
//         console.log("O maior numero é: " + num2);
//     } else {
//         console.log("O maior numero é: " + num3);
//     }

// // Calculadora if else
// let prompt = require('prompt-sync')()
// //pra rodar prompt é necessario instalar o modulo de prompt
// let num1 = Number(prompt("Primeiro numero: "))
// let num2 = Number(prompt("Segundo numero: "))
// let operation = prompt("Operação desejada (+, -, /, *): ")
// let result = 0 //armazena o resultado, inicializado com 0

// if(operation === '+'){
//   result = num1 + num2
// } else if (operation === '-'){
//   result = num1 - num2
// } else if (operation === '*'){
//   result = num1 * num2
// } else if (operation === '/'){
//   if(num2 !== 0){
//     result = num1 / num2
//   } else {
//     console.log("Erro: divisão por zero!")
//     result = undefined
//   }
// } else {
//   console.log('Operação inválida')
//   result = undefined //ou null
// }
// if(result !== undefined){
//   console.log("Resultado: ", result)

// //SWITCH: te ajuda a escolher uma ação diferente com base em um valor específico
// let option = 3
// switch(option){
//   case 1:
//     console.log('Você selecionou a primeira opção')
//     break //break significa que o codigo achou uuma correspondencia e pode parar de rodar
//   case 2:
//     console.log('Você selecionou a segunda opção')
//     break
//     default:
//       console.log('Você não selecionou nada')
//       break
// }

// //EXERCICIO 1 = dias da semana
// let option = 8
// switch(option){
//   case 1:
//     console.log('Hoje é segunda-feira')
//     break
//   case 2:
//     console.log('Hoje é terça-feira')
//     break
//   case 3:
//     console.log('Hoje é quarta-feira')
//     break
//   case 4:
//     console.log('Hoje é quinta-feira')
//     break
//   case 5:
//     console.log('Hoje é sexta-feira')
//     break
//   case 6:
//     console.log('Hoje é sábado')
//     break
//   case 7:
//     console.log('Hoje é domingo')
//     break
//     default:
//       console.log('Erro: não é valido')
//       break
// }

// Calculadora switch
let prompt = require('prompt-sync')()
//pra rodar prompt é necessario instalar o modulo de prompt
let num1 = Number(prompt("Primeiro numero: "))
let num2 = Number(prompt("Segundo numero: "))
let operation = prompt("Operação desejada (+, -, /, *): ")
let result = 0 //armazena o resultado, inicializado com 0

switch(operation){
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/': //se algum caso seja igual outro pode ir listando os cases um abaixo do outro e dps dar a ordem
    if(num2 !== 0){
      result = num1 / num2
    } else {
      console.log("Erro: divisão por zero!")
      result = undefined
    }
    break
    default:
      return 'Operação inválida'
}
  console.log("Resultado: ", result)