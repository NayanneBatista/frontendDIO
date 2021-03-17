let testes = parseInt(gets());

while (testes > 0) { 
  let suprimento = parseFloat(gets());
  let dias = 0; 
  while (suprimento > 1) { 
    let consumo = 0.5 * suprimento
    suprimento -= consumo
    dias++
  }
  console.log(dias + ` dias`); 
  testes--
}