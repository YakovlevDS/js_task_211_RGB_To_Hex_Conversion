// solution_1
questions.map(obj=>obj.usersAnswer = null)
  
// solution_2

for (i=0; i<questions.length; i++) {
  questions[i].usersAnswer = null;
  };
  

  // solution_3

  questions.forEach(function(q) {
    q.usersAnswer = null
  })
  // solution_4

  for (i=0; i<questions.length; i++) {
    questions[i].usersAnswer = null;
    };

  // solution_5

  questions.reduce(function(last, cur){
  return cur.usersAnswer = null;
},0);