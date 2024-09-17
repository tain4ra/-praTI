/*
Filtrando Propriedades de Objetos
    Objetivo: Dado um objeto produto com várias propriedades, crie uma
    função que retorna um novo objeto contendo apenas as propriedades cujo
    valor seja maior que um valor específico. Use for in para filtrar as
    propriedades.
*/
const produto = {
    nome: "Ereader",
    preco: 800,
    desconto: 80,
    quantidade: 78,
    parcelamento: 12,
  };
  
  function filtrarPropriedades(produto, valorMinimo) {
    let novoProduto = {};
  
    for (let propriedade in produto) {
      if (typeof produto[propriedade] === "number" && produto[propriedade] > valorMinimo){
        novoProduto[propriedade] = produto[propriedade];
      }
    }
  
    return novoProduto;
  }
  
  let valorMinimo = 79 //Aqui define-se o valor mínimo
  let resultado = filtrarPropriedades(produto, valorMinimo);
  console.log(resultado);