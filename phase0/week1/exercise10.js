
//assignment 10
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  var hasilPerbandingan = ""
  if(angka1 < angka2){
  hasilPerbandingan = true
  }else if(angka1 > angka2){
  hasilPerbandingan = false
  }else{
  hasilPerbandingan = "-1"
  }

  return hasilPerbandingan
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

