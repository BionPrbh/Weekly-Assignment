

function dataHandling(input){

  var nomorID= "" 
  var namaLengkap = "" 
  var tempatTanggalLahir = "" 
  var hobi = "" 

  indexOfData = 0
  while(indexOfData < input.length){

    for(indexOfDataDetails = 0; indexOfDataDetails < input[0].length-1;indexOfDataDetails += 1){
      if(indexOfDataDetails == 0){
        nomorID = "Nomor ID:  " + input[indexOfData][indexOfDataDetails]
      }else if(indexOfDataDetails == 1){
        namaLengkap = "Nama Lengkap:  " + input[indexOfData][indexOfDataDetails]
      }else if(indexOfDataDetails == 2){
        tempatTanggalLahir = "TTL:  " + input[indexOfData][indexOfDataDetails]
      }else if(indexOfDataDetails == 3){
        hobi = "Hobi:  " + input[indexOfData][indexOfDataDetails]
      }
        
    }

    console.log(nomorID + "\n" + namaLengkap + "\n" + tempatTanggalLahir + "\n" +hobi + "\n")
    indexOfData += 1
  }
}
   
  


dataHandling([
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
])

/*

0 0
0 1
0 2
0 3

1 0
1 1
1 2
1 3

2 0
2 1
2 2
2 3

3 0
3 1
3 2
3 3

*/
