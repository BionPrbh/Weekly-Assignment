
//1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA");
var flag = 0;
while(flag < 20){
  flag += 2;
  console.log(flag + " - I love coding");
}
console.log("LOOPING KEDUA");
var flag = 22;
while(flag > 2){
  flag -= 2;
  console.log(flag + " - I will become fullstack developer");
}

//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(i=1; i < 21; i++){
  console.log(i + " - I love coding");
}
console.log("LOOPING KEDUA");
for(i=20; i > 0; i--){
  console.log(i + " - I wil become fullstack developer");
}

//3. Angka Ganjil dan Genap
for(i=1; i <= 100; i++){
  
  if (i % 2){
    console.log("Counter sekarang: " + i);
    console.log("GANJIL");
  }else{
    console.log("Counter sekarang: " + i);
    console.log("GENAP");
  }
}
//PERTAMBAHAN 2
for(i=1; i <= 100; i+=2){
  
  if (i % 3){
    console.log("Counter sekarang: " + i);
    console.log("");
  }else{
    console.log("Counter sekarang: " + i);
    console.log(i + " KELIPATAN 3");
  }

}
//PERTAMBAHAN 5
for(i=1; i <= 100; i+=5){
  
  if (i % 6){
    console.log("Counter sekarang: " + i);
    console.log("");
  }else{
    console.log("Counter sekarang: " + i);
    console.log(i + " KELIPATAN 6");
  }
}
//PERTAMBAHAN 9
for(i=1; i <= 100; i+=9){
  
  if (i % 10){
    console.log("Counter sekarang: " + i);
    console.log("");
  }else{
    console.log("Counter sekarang: " + i);
    console.log(i + " kelipatan 10");
  }
}



