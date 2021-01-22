// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

let totalItens = gets()
let itens = []

for (let i = 0; i < totalItens; i++) {
  itens.push(parseInt(gets()))
}

let itensPares = itens.filter(n => n % 2 == 0)
let itensParesOrdenados = itensPares.sort(function (a, b){
  return a - b
})

let itensImpares = itens.filter(n => n % 2 != 0);
let itensImparesOrdenados = itensImpares.sort(function (a, b){
  return a - b
})

let itensImparesDecrescente = itensImparesOrdenados.reverse()
let vetorFinal = itensParesOrdenados.concat(itensImparesDecrescente)
vetorFinal.forEach(numero => console.log(numero))