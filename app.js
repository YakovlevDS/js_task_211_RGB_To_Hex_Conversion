// solution_1
const myLanguages=results=> Object.keys(results)
.filter(val=>results[val]>59)
.sort((a,b)=>results[b]-results[a])

// solution_2
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

// solution_3

function myLanguages(results) {
  return Object.entries(results).sort((a,b) => b[1] - a[1]).filter( item => item[1] >= 60).map(item => item[0]);
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])


