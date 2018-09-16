function hitungHuruf(str) {
    str = str.toLowerCase();
    var wordArray = str.split(" ");

    var results = [];
    var count = 0;
    for (var i = 0; i < wordArray.length; i++) {
      var word = wordArray[i];
      var countThisWordsBestLetter = 0;
      for (var a = 0; a < word.length; a++) {
          var countLetter = 0;
          var letter = word[a];
          for (var b = a + 1; b < word.length; b++) {
              var nextLetter = word[b];
              if (letter === nextLetter) {
                  countLetter += 1; 
              }
          }
          if (countLetter > countThisWordsBestLetter) {
              countThisWordsBestLetter = countLetter;
          }
      }
      if (countThisWordsBestLetter > count) {
          // forget any words we gathered before:
          results = [];
      }
      if (countThisWordsBestLetter > count) {
          count = countThisWordsBestLetter;
          results.push(wordArray[i]);
      }
    }
    return results;
}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau