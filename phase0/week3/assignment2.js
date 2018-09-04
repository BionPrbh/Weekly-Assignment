

function balikString(word){
 var index = word.length-1
 var hasilPembalikkan = ""
 for(index; index >= 0; index--){
   hasilPembalikkan += word[index]
 }


  return hasilPembalikkan
}

balikString("hello")
