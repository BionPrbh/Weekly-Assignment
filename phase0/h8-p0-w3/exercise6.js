function angkaPalindrome(num){


  var limit = 0;
  var temp = 0;
    while (num > limit){
	  var selector = num.toString();
	  if (num < 10){
		temp = num;
		limit += 5
	  }else if(selector[0] === selector [selector.length-1]){
		temp = num;
		limit = num + 1;
	  }
	  num++;
  }

  return temp;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

