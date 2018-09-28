function graduates(students) {
  // Code disini
  // buat variabel output untuk menampung hasil yang akan di return dengan valie curly bracket kosong
  var output = {}
  // buat loop untuk terhadap students dengan var i dengan nilai 0 yang berjalan selama i kurang dari jumlah array dari students, selama loopiing berjalan tambahkan i sebanyak 1
  for (var i = 0; i < students.length; i++) {
    // jika di dalam output belum ada students[index i] dengan keys class, maka buat students[index i] dengan keys class berisi array kosong
    if (output[students[i].class] === undefined) {
      output[students[i].class] = []
    }
    // jika keys score dari students index i lebih dari 75, maka push object berisi keys name: students[i].name dan score: students[i].score kedalam output keys class dari studenst index i
    if (students[i].score > 75) {
        output[students[i].class].push({
        name: students[i].name,
        score: students[i].score
      })
    }
  }
  return output
}

console.log(graduates([
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
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
