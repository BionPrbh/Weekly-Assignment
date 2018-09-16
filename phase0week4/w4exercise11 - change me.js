function changeMe(arr){
  if(arr[0] === ""){
  console.log(arr[0])
  }else{
    var changeMeObj = {}
    for(var i = 0; i < arr.length; i++){
      changeMeObj.firstName = arr[i][0]
      changeMeObj.lastName = arr[i][1]
      changeMeObj.gender = arr[i][2]
      var age = 2018-arr[i][3]
      if(age >= 1){
        changeMeObj.age = 2018-arr[i][3]
      }else{
        changeMeObj.age = "Invalid Birth Year"
      }
    console.log((i+1)+". "+changeMeObj.firstName+" "+changeMeObj.lastName+": ")
    console.log(changeMeObj)
    }
  }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
