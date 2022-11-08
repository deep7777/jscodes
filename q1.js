/*
Given an array of strings such as
 
  ["A", "B", "C"]
 
return an array of objects such as
 
  [ {"name": "A"}, {"name": "B"}, {"name": "C"} ]
*/

const input = ['a', 'b', 'c'];
const output = [];
input.forEach(element => output.push({
   'name': element
}));
console.log(output);