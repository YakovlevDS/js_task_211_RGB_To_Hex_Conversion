// solution_1
function maxTriSum(numbers){
  const sorted= [...new Set(numbers.sort((a,b)=>b-a))]
 return sorted[0]+sorted[1]+sorted[2]
}
// solution_2
function maxTriSum(numbers){
  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}

// solution_3

function maxTriSum(numbers){
  numbers.sort((a, b) => b - a)
  let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
  return arr[0] + arr[1] + arr[2]
}

console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]) )
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]) )
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]) )

