var rand = {
    number: 6,
    roll: function () {
      var acak = Math.floor(Math.random() * this.number) + 1;
      return acak;
    }
  }
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }

  var button = document.getElementById('button');
  button.onclick = function() {
    
    var result = rand.roll();
    
      printNumber(result);
    
    
  };
  
  