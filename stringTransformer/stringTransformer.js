var myRe = /[aeiou]/gm;
var input = prompt("Please enter a word or phrase");
let i = 0;

console.log(input.replace(myRe, function() {
  return ++i;
}));
