function perkalianUnik(arr) {
var tempNum = arr[0];
var tempStr = [];
var counter = 0;
for (counter; counter < arr.length; counter++){
var index = 1;
  for (index; index < arr.length; index++){
    tempNum = tempNum * arr[index];
  }
tempNum = tempNum/arr[counter];
tempStr.push(tempNum);
tempNum = arr[0];
}
return tempStr;
}
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

