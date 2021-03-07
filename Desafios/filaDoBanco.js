let testes = gets()
let casos = []
let count = 0
let casosDecrescente = []

for (let i = 0; i < testes; i++) {
  
    let cliente = {}
    cliente.numero = gets()
    cliente.senhas = gets().split(" ").map(value => Number(value))
    
    casos.push(cliente.senhas)
    casosDecrescente.push([...casos[i]].sort((a,b)=>b-a))
}

for(let i = 0; i < casos.length; i++){
  count = 0
  for(let j = 0; j < casos[i].length; j++){
    if(casos[i][j] == casosDecrescente[i][j])
      count++
  }
  console.log(count)
}