/*
Verificando Propriedades
    Objetivo: Crie um objeto livro com propriedades titulo, autor,
    anoPublicacao e genero. Verifique se a propriedade editora existe no
    objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "Matéria Escura",
    autor: "Blake Crouch",
    anoPublicacao: 2016,
    genero: "Sci fi",
}

let editoraExiste = false;
for(let propriedade in livro){
    if (propriedade === "editora"){
        editoraExiste = true;
        break;
    }
}

if (!editoraExiste){
    livro.editora = "Intriseca";
}

console.log(livro)