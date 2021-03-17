
let arrayAlunos = [
    {nome: "Maria", ficha: 7},
    {nome: "Pedro", ficha: 9},
    {nome: "Joao_Vitor", ficha: 5},
    {nome: "Isabel", ficha: 12},
    {nome: "Laura", ficha: 8}
]

let fichaAtual = arrayAlunos[0].ficha
let posicaoAtual = 1
let indiceAtual = 1

while(arrayAlunos.length > 1){
    if(fichaAtual % 2 == 0){
        for(let i = posicaoAtual; i < fichaAtual; i++){
            if(indiceAtual == arrayAlunos.length-1){
                indiceAtual = 0
            }
            else{
                indiceAtual++
            }
        }
    }
    else{
        for(let i = posicaoAtual; i < fichaAtual; i++){
            if(indiceAtual == 0){
                indiceAtual = arrayAlunos.length-1
            }
            else{
                indiceAtual--
            }
        }
    }

    fichaAtual = arrayAlunos[indiceAtual].ficha
    if(fichaAtual % 2 == 0) {
        posicaoAtual = indiceAtual + 1
        if(posicaoAtual > arrayAlunos.length - 1) {
            posicaoAtual = 0
        }
    }else {
        posicaoAtual = indiceAtual - 1
        if(posicaoAtual > 0) {
            posicaoAtual = arrayAlunos.length - 1
        }
    }
    //posicaoAtual = verificarFichaAtual(fichaAtual)
    
    arrayAlunos.splice(indiceAtual, 1)
    
}

console.log(arrayAlunos[posicaoAtual].nome)


// function verificarFichaAtual(ficha) {
//     if(fichaAtual % 2 == 0) {
//         posicaoAtual = indiceAtual + 1
//         if(posicaoAtual > arrayAlunos.length - 1) {
//             posicaoAtual = 0
//         }
//     }else {
//         posicaoAtual = indiceAtual - 1
//         if(posicaoAtual > 0) {
//             posicaoAtual = arrayAlunos.length - 1
//         }
//     }
//     return posicaoAtual
// }

// 3
// Fernanda 7
// Fernando 9
// Gustavo 11
// 5
// Maria 7
// Pedro 9
// Joao_Vitor 5
// Isabel 12
// Laura 8
// 3
// Maria 4
// Pedro 3
// Joao 2
// 0