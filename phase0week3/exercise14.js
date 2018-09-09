function mengelompokkanAngka(arr) {
  // you can only write your code here!
var genap = []
var ganjil = []
var dibagi3 = []
var gabungan = [genap, ganjil, dibagi3]

for (index = 0; index < arr.length; index++){
  if(arr[index] % 2 == 0 && arr[index] % 3 !== 0){
    genap.push(arr[index]);
  }else if(arr[index] % 2 == 1 && arr[index] % 3 !== 0){
    ganjil.push(arr[index]);
  }else if(arr[index] % 3 == 0){
    dibagi3.push(arr[index]);
  }
}
return gabungan;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
