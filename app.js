// solution_1
const findMissing = (arr1, arr2) => {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]) return arr1[i];
  }
}
// solution_2

const sum = arr => arr.reduce((a, b) => a + b, 0);

const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);

  // solution_3
  const findMissing = (arr1, arr2) =>
  arr1.reduce((pre, val) => pre + val) - arr2.reduce((pre, val) => pre + val, 0);

  // solution_4

  function findMissing(arr1, arr2) {
    return arr1.sort().filter((e,i) => arr2.sort()[i] !== e)[0]
    }
  // solution_5
  function findMissing(arr1, arr2) {
    return arr1.reduce( (s, el) => s + el, 0) - arr2.reduce( (s, el) => s + el, 0);
  }
  // solution_6

  const findMissing=(arr1, arr2)=> arr1.sort()
.filter((e,i) => arr2.sort()[i] !== e)[0]


console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) )