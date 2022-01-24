// solution_1
const toHex = num => {
  if (num< 1)   return '00';
  if (num> 255)  return 'FF';
 let numHex = num.toString(16).toUpperCase();
 return numHex.length == 1 ? 0 + numHex : numHex;
}
const rgb= (r, g, b) =>toHex(r) + toHex(g) + toHex(b);
// solution_2
function rgb(r, g, b){
  return [r,g,b].map(x => { 
    if(x > 255) return 'FF'
    else if(x < 1) return '00'
    else return x.toString(16).toUpperCase()}).join('') 
}



console.log(toHex(17, 45, 67))
