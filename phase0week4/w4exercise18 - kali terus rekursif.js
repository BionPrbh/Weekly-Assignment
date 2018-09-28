function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var stringed = String(angka)
  if(stringed.length === 1){
    return angka
  }else{
    var temp = 1
    for(var i = 0; i<stringed.length; i++){
      temp *= stringed[i]
    }
    angka = Number(temp)
    return kaliTerusRekursif(angka)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
