
//asssignment 13
function xo(str) {

var count1 = str.match(/x/g).length
var count2 = str.match(/o/g).length

if (count1 === count2){
  match=true
}else{
  match=false
}
  return match
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true