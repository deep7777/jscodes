/*

*/
const input = ["dog", "cat", "mouse", "sky", "eleven"]
const vowels = ["a", "e", "i", "o", "u"];
var output = [];
var string="";
input.filter((word,index) => {
   let splitWord = Array.from(word);

   let parenthesesArray = splitWord.map((element,index) => 'aeiou'.includes(element) ? string.concat("("+ element +")") : string.concat(element)).toString();

   console.log(parenthesesArray);
   let result = parenthesesArray.replace(/,/g,"").replace(")(","")
   output.push(result);

});

console.log(JSON.stringify(output));

