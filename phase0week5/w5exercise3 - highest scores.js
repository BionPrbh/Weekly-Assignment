
function highestScore(students) {
  // Code disini
  //buat variabel output dengan nilai object kosong 
  var output = {}
  // buat perulangan dengan variabel i bernilai 0 dan loop akan berjalan selama i kurang dari panjang variabel students, tambah nilai dengan satu setiap perulangan
  for (var i = 0; i < students.length; i++) {
    //buat variabel temp dengan nilai 0 sebagai penampung angka pembanding untuk mengambil score terbesar
    var temp = 0
    //jika dalam output tidak ada keys .class dari students index i, maka buat output dengan keys class dari student index i berisikan objek dengan name berisi keys name dari student index i dan score berisi score dari student index i
    if (output[students[i].class] === undefined) {
      output[students[i].class] = {
        name: students[i].name,
        score: students[i].score
      }
    }
    //gati nilai temp dengan keys score dari index i
    temp = students[i].score
    //jika keys score dari keys class dari student index i output lebih kecil dari temp, maka output sama dengan keys class dari student index i berisikan objek dengan name berisi keys name dari student index i dan score berisi score dari student index i
    if (output[students[i].class].score < temp) {
      output[students[i].class] = {
        name: students[i].name,
        score: students[i].score
      }
    }
  }
  //kembalikan nilai output
  return output
}



// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  },
  {
    name: 'Budi',
    score: 100,
    class: 'foxes'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

