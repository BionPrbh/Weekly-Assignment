//1. Menyusun Barisan Bintang
var deret = 0
var tinggi = 5

while(deret < tinggi){
  console.log("*")
  deret +=1
}


//2. Menyusun Barisan Bintang Dengan Nested Looping
var tinggi = 5
var deret = 0
var bintang = ""

while(deret < tinggi){
  bintang = bintang + "*"
  console.log(bintang)
  deret += 1
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var tinggi = 5
var deret = 0

while (deret < tinggi){
 var bintang = ""
 var deretDalam = 0
 while(deretDalam < tinggi){
   bintang += "*"
   deretDalam = deretDalam + 1
 }

 deret += 1
 console.log(bintang)
}
