let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let lines = gets()

while (lines != 4) {
  lines = Number(gets())
  
  switch (lines) {
    case 1:
      alcohol++
      break;
    case 2:
      gasoline++
      break;
    case 3:
      diesel++
      break;
    case 4:
      break;
    default:
      continue;
  }
}

  console.log("MUITO OBRIGADO");
  console.log("Alcool: " + alcohol);
  console.log("Gasolina: " + gasoline);
  console.log("Diesel: " + diesel);