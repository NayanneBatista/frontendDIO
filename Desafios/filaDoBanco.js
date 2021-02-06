let testes = gets()
let itens = []
let newArray = []
let count = 0

for (let i = 0; i < testes; i++) {
  let casos = {}
  casos.clientes = gets()
  casos.senhas = gets().split(" ")
  itens.push(casos)
}


for(let i = 0; i < itens; i++){
  for(let j = 0; j < casos.clientes; j++){
    newArray.push(itens[i].senhas.sort((a, b) => b - a))
  }
}

for(let i = 0; i < itens.length; i++){
  for(let j = 0; j < itens[i].senhas; j++){
    if(newArray[i] != casos.senhas[j])
    count++
  }
}

console.log(count)