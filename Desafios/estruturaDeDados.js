let totalItems = gets()
let linhas = []

for (let i = 0; i < totalItems; i++) {
  linhas.push((gets()))
}

let itens = []

for (let i = 0; i < linhas.length; i++) {  
  itens[i] =  [...new Set(linhas[i].split(" ").sort())].join(" ")
}

itens.forEach(value => console.log(value))