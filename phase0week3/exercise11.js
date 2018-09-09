function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
var result = "";
var deret = arr[1] - arr[0];
for (counter = 0; counter < arr.length-2; counter++){
  if ((arr[counter] + deret) !== arr[counter+1]){
   result = false;  
  }else{
   result = true;
  }
}

return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

