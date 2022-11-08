/*
** Question 4
 
Given an array of words, pick out only those words that have two or
more vowels in them. For the purposes of this question, a vowel is one
of the letters a, e, i, o, u.
 
For example, given
 
  ["dog", "cat", "mouse", "sky", "eleven"]
 
return
 
  ["mouse", "eleven"]
 
*/

const input = ["dog", "cat", "mouse", "sky", "eleven"]
const vowels = ["a", "e", "i", "o", "u"];
let vowelString = 'aeiou';

var output = [];
var obj = {};
input.forEach(item => {
  let wordArray =  Array.from(item);
    wordArray.filter(letter => vowelString.includes(letter)).length > 1
    ? output.push(item) : ""
});
console.log(output);