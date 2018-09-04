
//Tugas 1
function shoutOut(){
  shoutOut = "Halo Function!" 
  return shoutOut
}
console.log(shoutOut())

//Tugas 2
function calculateMultiply(hasilPerkalian){
  hasilPerkalian = num1 * num2
  return hasilPerkalian
}
var num1 = 5
var num2 = 6
var hasilPerkalian = calculateMultiply(num1,num2)
console.log(hasilPerkalian)

//Tugas 3
function processSentence(fullSentence){
  fullSentence = "Nama saya " + name + ", " + "umur saya " + age + " tahun" + " alamat saya di " + address + "dan saya punya hobby yaitu " + hobby + "!"
  return fullSentence
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Jogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);
	
	
	
