function balikKata(input){

  var temp = ""
  for (var i = input.length-1 ; i >= 0; i--) {
    temp += input[i]
  }
  return temp
}//output
// "!dlrow olleh"

console.log(balikKata("hello world!"))
