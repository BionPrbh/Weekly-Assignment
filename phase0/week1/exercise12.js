
//KONVERSI MENIT
function konversiMenit(menit) {
var permenit = 60
var splitMenit = Math.floor(menit/permenit)
var splitDetik = Math.floor(menit%60)
if (splitDetik <= 9 ){
 var splitDetik = "0" + splitDetik
}
var waktu = (splitMenit+":"+splitDetik)
return waktu

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00