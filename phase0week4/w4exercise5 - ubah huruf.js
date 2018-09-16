function ubahHuruf(kata) {
var temp = [];
var index = 0;  // you can only write your code here!
var dictionary = "abcdefghijklmnopqrstuvwxyz";
for (index; index < kata.length; index++){
  var counter = 0;
  for(counter; counter < dictionary.length; counter++){
    if (dictionary[counter] === kata[index]){
      temp.push(dictionary[counter+1]);
    }
  }
  var result = temp.join('');
}
return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu