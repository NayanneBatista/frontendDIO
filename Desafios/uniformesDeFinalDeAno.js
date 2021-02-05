let totalAlunos = gets()
let lista = []

for (let i = 1; i <= totalAlunos; i++) {
  
  let aluno = {}
  aluno.nome = gets()
  
  let info = gets().split(" ")
  aluno.cor = info[0]
  aluno.tamanho = info[1]
  
  lista.push(aluno)
}

let sortFunction = (a, b) => {
  if(a.cor > b.cor){
    return 1
  }
  else if(a.cor < b.cor){
    return -1
  }
  else{
    if(a.tamanho < b.tamanho){
      return 1
    }
    else if(a.tamanho > b.tamanho){
      return -1
    }
    else {
      if(a.nome > b.nome){
        return 1
      }
      else if(a.nome < b.nome){
        return -1
      }
      return 0
    }
  }
}

lista.sort(sortFunction)

lista.forEach(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome))

console.log(lista)