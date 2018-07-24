//create new array to hold results
var results = [];
var testArray = ["apple", "banana", "coconut", "donut"];
var testArray2 = ["monkey", "banana", "dog", "horse"];
var testArray3 = [18, "banana", "yoyo", 44, 57];
var allArrays = [testArray, testArray2, testArray3];

//function to pick random element from array and push it to results
var picker = function(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  results.push(arr[randomNum]);
}

//run the picker function on all of the arrays
allArrays.forEach(function(arr) {
  picker(arr);
});

//determine if there are any matches
var win = function(arr) {
  var arrSet = new Set(arr);
  if (arrSet.size !== arr.length) {
    return true;
  }
  else return false;
}

console.log(results);
console.log(win(results));
