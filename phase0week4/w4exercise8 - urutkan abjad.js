function urutkanAbjad(str) {
  // you can only write your code here!
var dict = "abcdefghijklmnopqrstuvwxyz"
var temp = ""
for(var i = 0; i < dict.length; i++){
  for(var j = 0; j < str.length; j++){
    if(dict[i] === str[j]){
      temp += str[j]
    }
  }
}
return temp
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
