/*
** Question 2
 
Given an array of string, such as
 
  ["A", "B", "C", "Z", "Q"]
 
return an object such as
 
  { "A": 0,  "B": 1,  "C": 2,  "Z" : 3,  "Q": 4 }
 
*/

const input = ["A", "B", "C", "Z", "Q"];
const output = {};
input.forEach(element => output[element] = input.indexOf(element));
console.log(output);