//palindrom kata


function palindrome(kata){
  
  var temp = "";
  var i = kata.length-1;
  while ( i >= 0){
    temp += kata[i];
    i -= 1;
  }

  var result = ""
  if (temp == kata){
    result = true
  }else{
    result = false
  }
  return result;
}

// TEST CASES
console.log(palindrome('katak'));

