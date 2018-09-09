function targetTerdekat(arr) {
  // you can only write your code here!
  var counter = 0;
  var letakO = [];
  var letakX = [];
  var checker = "";
  for (counter; counter < arr.length; counter++){
    if(arr[counter] == "o"){
      letakO.push(counter);
    }else if(arr[counter] == "x"){
      letakX.push(counter);
    }else if(arr[counter] == ""){
      letakX.push(counter);
    }
  }
  letakOnum = Number(letakO)
  letakXnum = Number(letakX)
  var result = ""
  if(letakO[0] < letakX[0]){
    result = Math.abs(letakO[0]-letakX[0])
  }else if(letakO[0] > letakX[letakX.length-1]){
    result = Math.abs(letakO[0]-letakX[letakX.length-1])
  }
  if(result == ""){
    result = 0
  }
  return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2 
