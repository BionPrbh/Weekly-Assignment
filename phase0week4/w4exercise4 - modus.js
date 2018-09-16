function cariModus(arr) {
  // you can only write your code here!
var nilai = 0
var jumlah = 0

var i = 0
for(i; i < arr.length; i++){
  var j = 0
  var total = 0
  for(j; j < arr.length; j++){
    if(arr[i] === arr[j]){
      total += 1
      if(total > jumlah){
        jumlah = total
        nilai = arr[i]
      }
    }
  }
}
if(jumlah === 1 || jumlah === arr.length){
return -1  
}
return nilai
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1