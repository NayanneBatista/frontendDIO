let candidatos= Number(gets()); 
let votosRafael= Number(gets());
let result = "S"

for(let i = 0; i < candidatos - 1; i++){
  if(Number(gets()) > votosRafael){
    result = "N"
    break
  }
}

console.log(result);