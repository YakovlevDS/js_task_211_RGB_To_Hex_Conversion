// solution_1
const nicknameGenerator=name=>{
  const vowel= ['e','i','u','o','a','j']
  if (name.length<4 ){
    return "Error: Name too short"
  }
  
  if (vowel.includes(name[2])) {
      return name.slice(0,4)
}
  return name.slice(0,3)
}
// solution_2

const nicknameGenerator = (name) => name.length > 3 
  ? name.slice(0,  3 + 'aeiou'.includes(name[2])) 
  : 'Error: Name too short'
// solution_3

function nicknameGenerator(name) {
  if(name.length <= 3) {return 'Error: Name too short';}
  return !/[aeiou]/i.test(name[2]) ? name.slice(0,3) : name.slice(0,4);
}
// solution_4
const nicknameGenerator = n => n.length > 3 ? n.replace(/(..[^aeiou]|^.{4}).*/gi, '$1') : 'Error: Name too short';

console.log(nicknameGenerator("Sayaev"))