function pasanganTerbesar(num) {
  // you can only write your code here!
 var stringNum = num.toString();
 var stringArray = stringNum.split("");
 var temp = ""
 
  for (i = 0 ; i < stringArray.length-1; i++){
    if(stringArray[i] == Math.max(...stringNum)){ 
    temp = stringArray[i] + stringArray[i+1];
    }
  }
 return temp;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
