function dataHandling2(input){
  
  input.splice(1,1,"Roman Alamsyah Elsharawy")
  input.splice(2,1,"Provinsi Bandar Lampung")
  input.splice(4,1,"Pria", "SMA Internasional Metro")
  console.log(input)
  
  tanggal = input[3].split("/")
  console.log(tanggal)
  
  var bulan = tanggal[1]
  console.log(bulan)
  
  switch (bulan){
   case '01': {console.log('Januari');break;}
   case '02': {console.log('Februari');break;}
   case '03': {console.log('Maret');break;}
   case '04': {console.log('April');break;}
   case '05': {console.log('Mei');break;}
   case '06': {console.log('Juni');break;}
   case '07': {console.log('Juli');break;}
   case '08': {console.log('Agustus');break;}
   case '09': {console.log('September');break;}
   case '10': {console.log('Oktober');break;}
   case '11': {console.log('November');break;}
   case '12': {console.log('Desember');break;}
   }
  hasilPengurutan = tanggal.sort(function(value1, value2){return value2 - value1})
  console.log(hasilPengurutan)
  
  tanggal = input[3].split("/")
  var gabung = tanggal.join('-')
  console.log(gabung)
  
  potong = input[1].slice(0,15)
  console.log(potong)
return
}


dataHandling2(
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
)
