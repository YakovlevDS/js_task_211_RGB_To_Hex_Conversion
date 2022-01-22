// solution_1
const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
 }, {});
  
// solution_2

const combine = (...args) =>
  args.reduce((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});


  // solution_3

  function combine() {
    var obj = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return obj;
  }
  // solution_4

  const combine = (...o) => (b=>{
    for(var k in o) for(var i in o[k])
      b[i] = (i in b) ? b[i] + o[k][i] : o[k][i]; return b;})({});

  // solution_5

  const combine = (...xs) => xs.reduce((a, b) => {
    const result = {...a}
    for (const prop in b) {
      result[prop] = b[prop] + (result[prop] ? result[prop] : 0)
    }
  
    return result
  }, {})