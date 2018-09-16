function fpb(angka1, angka2) {
  // you can only write your code here!
var sisa = 0
var result = 0
var pembagi = angka1
while (pembagi > 0){
  if(angka2 % pembagi === 0 && angka1% pembagi === 0){
    return pembagi

  }else{
    pembagi -= 1
  }  
}
return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
