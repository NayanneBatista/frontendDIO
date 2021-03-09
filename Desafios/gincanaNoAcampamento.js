
let totalAlunos = 3
let arrayAlunos = [
    {nome: "Fernanda", ficha: 2},
    {nome: "Fernando", ficha: 9},
    {nome: "Gustavo", ficha: 11}
]

let fichaAtual = arrayAlunos[0].ficha
let posicaoAtual = 1
let indiceAtual = posicaoAtual

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
    arrayAlunos.slice(indiceAtual, 1)
    console.log(arrayAlunos)
}

console.log(arrayAlunos[0].nome)

/*
for(let i = 0; i < totalAlunos; i++){
    let aluno = {}
    let pessoa = gets().split(" ")
    aluno.nome = pessoa[0]
    aluno.ficha = pessoa[1]
    arrayAlunos.push(aluno)
}*/

//console.log(arrayAlunos)







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