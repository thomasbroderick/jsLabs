//convert string to an array
var testString = "giraffe";
var testArray = testString.split("");

//use Set to get only unique values
var testSet = new Set(testArray);

//create a new array to hold the object with value and count
var histArray = [];

//iterate over the array counting the # of times a character occurs
testSet.forEach(function(element) {
  var count = (testString.split(element).length - 1);
  var arrayObj = {char: element, count: count};
  histArray.push(arrayObj);
});

//sort the array descending by count
histArray.sort(function(a, b) {
    return b.count - a.count;
});
console.log(histArray);
return histArray;
