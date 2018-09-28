function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length === 0) {
    return arrPenumpang;
  } else {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var nama = []
    var berangkat = [];
    var tujuan = [];

    for (var i = 0; i < arrPenumpang.length; i++) {
      for (var j = 0; j < arrPenumpang[i].length; j++)
        if (j === 0) {
          nama.push(arrPenumpang[i][j]);
        }
        else if (j === 1) {
          berangkat.push(arrPenumpang[i][j]);
        }
        else if (j === 2) {
          tujuan.push(arrPenumpang[i][j]);
        }
    }

    var ongkos = []
    var indexBerangkat = 0
    var indexTujuan = 0
    for (var i = 0; i < nama.length; i++) {
      for (var j = 0; j < rute.length; j++) {
        if (berangkat[i] === rute[j]) {
          indexBerangkat = j
        } else if (tujuan[i] === rute[j]) {
          indexTujuan = j
        }
      }
      ongkos.push((indexTujuan - indexBerangkat) * 2000)
    }
    var result = []
    for (var i = 0; i < nama.length; i++) {
      var data = {
        penumpang: nama[i],
        naikDari: berangkat[i],
        tujuan: tujuan[i],
        bayar: ongkos[i]
      }
      result.push(data)
    }
    return result
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
