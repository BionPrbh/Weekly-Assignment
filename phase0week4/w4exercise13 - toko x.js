function countProfit(shoppers) {
  if(shoppers.length < 1){
    return shoppers
  }
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  //you can only write your code here!
  var buyerSepatu = []
  var buyerBaju = []
  var buyerSweater = []
  var pembelianSepatu = 0
  var pembelianBaju = 0
  var pembelianSweater = 0
  var stockSepatu = listBarang[0][2]
  var stockBaju = listBarang[1][2]
  var stockSweater = listBarang[2][2]

  var pembeli = [buyerSepatu, buyerBaju, buyerSweater]
  for(var i = 0; i < shoppers.length; i++){
    if(shoppers[i]['product'] === 'Sepatu Stacattu' && stockSepatu - shoppers[i]['amount'] >= 0){
      stockSepatu = stockSepatu - shoppers[i]['amount']
      pembelianSepatu += shoppers[i]['amount']
      buyerSepatu.push(shoppers[i]['name'])
    }else if(shoppers[i]['product'] === 'Baju Zoro' && stockBaju - shoppers[i]['amount'] >= 0){
      stockBaju = stockBaju - shoppers[i]['amount']
      pembelianBaju += shoppers[i]['amount']
      buyerBaju.push(shoppers[i]['name'])
    }else if(shoppers[i]['product'] === 'Sweater Uniklooh' && stockSweater - shoppers[i]['amount'] >= 0){
      stockSweater = stockSweater - shoppers[i]['amount']
      pembelianSweater += shoppers[i]['amount']
      buyerSweater.push(shoppers[i]['name']) 
    }
  }

  var jumlahPembelian = [pembelianSepatu, pembelianBaju, pembelianSweater]
  var hasilAkhir = []
  for(var j = 0; j < listBarang.length; j++){
    var result = {
      product: listBarang[j][0],
      shoppers: pembeli[j],
      leftover: (listBarang[j][2]-jumlahPembelian[j]),
      totalProfit: listBarang[j][1]*jumlahPembelian[j]
    }
  hasilAkhir.push(result)
  }
return hasilAkhir
}



// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name:'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
