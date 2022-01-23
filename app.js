// solution_1
const getDecimal=n=> +("0."+String(n).split('.')[1])||0
// solution_2
function getDecimal(n){
  return Math.abs(n%1);
}
// solution_3
const getDecimal = n => +`${String(n).slice(String(n).indexOf('.'))}`;


console.log(getDecimal(-0.34) )
console.log(getDecimal(2.4) )
console.log(getDecimal(223) )

