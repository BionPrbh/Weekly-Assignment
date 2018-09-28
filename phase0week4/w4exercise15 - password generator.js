function changeVocals(str) {
  var splitted = str.split('')
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] === 'a') {
      splitted[i] = 'b'
    } else if (splitted[i] === 'i') {
      splitted[i] = 'j'
    } else if (splitted[i] === 'u') {
      splitted[i] = 'v'
    } else if (splitted[i] === 'e') {
      splitted[i] = 'f'
    } else if (splitted[i] === 'o') {
      splitted[i] = 'p'
    } else if (splitted[i] === 'A') {
      splitted[i] = 'B'
    } else if (splitted[i] === 'I') {
      splitted[i] = 'J'
    } else if (splitted[i] === 'U') {
      splitted[i] = 'V'
    } else if (splitted[i] === 'E') {
      splitted[i] = 'F'
    } else if (splitted[i] === 'O') {
      splitted[i] = 'P'
    }
  }
  var result = splitted.join("")
  return result
}

function reverseWord(str) {
  var result = ''
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function setLowerUpperCase(str) {
  var splited = str.split('')
  for (var i = 0; i < splited.length; i++) {
    if (splited[i] === splited[i].toLowerCase()) {
      splited[i] = splited[i].toUpperCase()
    }
    else { splited[i] = splited[i].toLowerCase() }
  }
  var result = splited.join('')
  return result
}

function removeSpaces(str) {
  var splited = str.split('')
  for (var i = 0; i < splited.length; i++) {
    if (splited[i] == ' ') {
      splited.splice(i, 1)
    }
  }
  var result = splited.join('')
  return result
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }else{
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTchangeVocals
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


