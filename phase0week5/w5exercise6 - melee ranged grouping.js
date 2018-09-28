function meleeRangedGrouping(str) {
    //your code here
    var arrayed = str.split(",")
    var arrayed2 = []
    for(var i = 0; i<arrayed.length; i++){
      var splitted = arrayed[i].split("-")
      arrayed2.push(splitted)
    }
    // console.log(arrayed2)
    var obj = {}
    for(var i = 0; i<arrayed2.length; i++){
      obj[arrayed2[i][1]] = []  
    }
    for(var i= 0; i<arrayed2.length; i++){
      obj[arrayed2[i][1]].push(arrayed2[i][0])
    }
    
   return Object.values(obj)
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  // console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []