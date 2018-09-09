function groupAnimals(animals) {
  // you can only write your code here!
var hewanA = [];
var hewanC = [];
var hewanK = [];
var hewanU = [];
for (i=0; i < animals.length; i++){
  if (animals[i][0] == "a"){
    hewanA.push(animals[i]);
  }else if (animals[i][0] == "c"){
    hewanC.push(animals[i]);
  }else if (animals[i][0] == "k"){
    hewanK.push(animals[i]);
  }else if (animals[i][0] == "u"){
    hewanU.push(animals[i]);
  }
}
var result = [hewanA,hewanC,hewanK,hewanU]
return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
