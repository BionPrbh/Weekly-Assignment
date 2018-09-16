function shoppingTime(memberId, money) {
  // you can only write your code here!
if(memberId === ""){
  return "Mohon maaf, toko X hanya berlaku untuk member saja";
}else if(money < 50000){
  return "Mohon maaf, uang tidak cukup";
}else if(memberId === "" && money < 50000){
  return "Mohon maaf, toko X hanya berlaku untuk member saja";
}else{

var listItem = {
'Sepatu Stacattu': 1500000,
'Baju Zoro': 500000,
'Baju H&N': 250000,
'Sweater Uniklooh': 175000,
'CasingHandphone': 50000
}

var arr = [];
var keys = Object.keys(listItem);

var totalPrice = 0
for(var i = 0; i < keys.length; i++){
  if(money > listItem[keys[i]]){
  totalPrice += listItem[keys[i]]
  arr.push(keys[i]);
  }
}

var print = { 
'memberId': memberId,
'money': money,
'listPurchasedArr':arr,
'changeMoney': money-totalPrice
}

}
return print
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
